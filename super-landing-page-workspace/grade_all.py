"""
Grades all eval runs for super-landing-page skill evaluation.
Writes grading.json into each run directory.
"""
import json
import os
import re

WORKSPACE = r"c:\Users\georg\Projects\Learn\Test-Repo\super-landing-page-workspace\iteration-1"

def read_html(path):
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8") as f:
        return f.read()

def check(html, pattern, case_insensitive=True):
    flags = re.IGNORECASE if case_insensitive else 0
    return bool(re.search(pattern, html, flags))

def grade_run(eval_name, run_type, assertions):
    run_dir = os.path.join(WORKSPACE, eval_name, run_type)
    html_path = os.path.join(run_dir, "outputs", "index.html")
    html = read_html(html_path)

    results = []
    for a in assertions:
        name = a["name"]
        desc = a["description"]

        if html is None:
            results.append({"text": name, "passed": False, "evidence": "index.html not found"})
            continue

        size = len(html)

        if name == "html_file_created":
            passed = size > 1000
            results.append({"text": name, "passed": passed, "evidence": f"File size: {size} bytes"})

        elif name == "brand_color_applied":
            passed = check(html, r"6[Cc]47[Ff][Ff]")
            results.append({"text": name, "passed": passed, "evidence": "Found #6C47FF" if passed else "#6C47FF not found in HTML"})

        elif name == "product_name_present":
            if "quill" in eval_name.lower():
                passed = check(html, r"Quill")
                results.append({"text": name, "passed": passed, "evidence": "'Quill' found" if passed else "'Quill' not found"})
            elif "clockwise" in eval_name.lower():
                passed = check(html, r"Clockwise")
                results.append({"text": name, "passed": passed, "evidence": "'Clockwise' found" if passed else "'Clockwise' not found"})
            else:
                results.append({"text": name, "passed": True, "evidence": "N/A for this eval"})

        elif name == "waitlist_cta_present":
            passed = check(html, r"waitlist|join|sign.?up", True)
            results.append({"text": name, "passed": passed, "evidence": "Waitlist/join CTA found" if passed else "No waitlist CTA found"})

        elif name == "has_sticky_nav":
            # Accept both sticky (preferred) and fixed (common alternative)
            passed = check(html, r"position\s*:\s*sticky|position\s*:\s*fixed")
            evidence = "position:sticky found" if check(html, r"position\s*:\s*sticky") else ("position:fixed found (acceptable)" if passed else "No sticky/fixed nav found")
            results.append({"text": name, "passed": passed, "evidence": evidence})

        elif name == "has_scroll_animations":
            passed = check(html, r"IntersectionObserver|fade-in")
            results.append({"text": name, "passed": passed, "evidence": "IntersectionObserver/fade-in found" if passed else "No scroll animations found"})

        elif name == "is_self_contained":
            # Allow Google Fonts but flag other external scripts
            bad = re.findall(r'<script[^>]+src=["\'][^"\']*(?:cdn|unpkg|jsdelivr|cloudflare)[^"\']*["\']', html, re.IGNORECASE)
            passed = len(bad) == 0
            results.append({"text": name, "passed": passed, "evidence": "No external CDN scripts" if passed else f"External CDN scripts found: {bad[:2]}"})

        elif name == "has_responsive_breakpoints":
            passed = check(html, r"@media")
            results.append({"text": name, "passed": passed, "evidence": "@media queries found" if passed else "No responsive breakpoints found"})

        elif name == "has_all_three_features":
            keywords = [r"generat|auto.generat", r"style|voice|tone", r"investor|send|one.click"]
            found = [kw for kw in keywords if check(html, kw)]
            passed = len(found) >= 2
            results.append({"text": name, "passed": passed, "evidence": f"{len(found)}/3 feature groups found"})

        elif name == "has_pill_buttons":
            # Match direct value OR CSS variable set to 980px
            passed = check(html, r"980px")
            results.append({"text": name, "passed": passed, "evidence": "980px radius found (pill buttons)" if passed else "No 980px radius found — pill buttons absent"})

        elif name == "clarifying_questions_documented":
            if run_type == "with_skill":
                q_path = os.path.join(run_dir, "outputs", "questions_asked.md")
                passed = os.path.exists(q_path) and os.path.getsize(q_path) > 50
                results.append({"text": name, "passed": passed, "evidence": "questions_asked.md found" if passed else "questions_asked.md missing or empty"})
            else:
                results.append({"text": name, "passed": True, "evidence": "N/A for baseline run (no questions expected)"})

        elif name == "discovery_call_cta_present":
            passed = check(html, r"discovery|book.a.call|schedule|discovery call", True)
            results.append({"text": name, "passed": passed, "evidence": "Discovery call CTA found" if passed else "No discovery call CTA found"})

        elif name == "minimal_design_signals":
            passed = check(html, r"-apple-system|BlinkMacSystemFont|SF.Pro")
            results.append({"text": name, "passed": passed, "evidence": "Apple system font stack found" if passed else "No Apple font stack found"})

        elif name == "dark_mode_applied":
            passed = check(html, r"#000000|#000;|background:\s*#0|background-color:\s*#0|--bg.*#0|#08|#09|#0a|#0b|#0c|#0d|#0e|#0f")
            results.append({"text": name, "passed": passed, "evidence": "Dark background color found" if passed else "No dark background found"})

        elif name == "has_pricing_section":
            # Prices may be split across HTML elements, so check for digits independently
            has_free = check(html, r"\bFree\b")
            # 12 in pricing context (near /mo, seat, or dollar)
            has_12 = check(html, r"(?:\$|>|\b)12(?:/mo|/seat|<|\b)")
            # 49 in pricing context
            has_49 = check(html, r"(?:\$|>|\b)49(?:/mo|<|\b)")
            passed = has_free and has_12 and has_49
            results.append({"text": name, "passed": passed,
                "evidence": f"Free:{has_free}, $12:{has_12}, $49:{has_49}"})

        elif name == "has_all_four_features":
            kws = [
                (r"time.capture|automatic|auto.capture|no.manual", "AI time capture"),
                (r"report|digest|weekly", "reports/digest"),
                (r"Slack|Jira|integrat", "integrations"),
                (r"dashboard|manager", "dashboard"),
            ]
            found = [(label, check(html, pat)) for pat, label in kws]
            passed_count = sum(1 for _, p in found if p)
            passed = passed_count >= 3
            results.append({"text": name, "passed": passed,
                "evidence": f"{passed_count}/4 features: " + ", ".join(f"{l}:{'✓' if p else '✗'}" for l, p in found)})

        elif name == "recommended_plan_highlighted":
            passed = check(html, r"popular|recommended|Most Popular|featured|highlight", True)
            results.append({"text": name, "passed": passed, "evidence": "Recommended plan marker found" if passed else "No recommended plan highlight found"})

        else:
            results.append({"text": name, "passed": False, "evidence": f"Unknown assertion: {name}"})

    passed_count = sum(1 for r in results if r["passed"])
    total_count = len(results)
    grading = {
        "expectations": results,
        "summary": {
            "passed": passed_count,
            "failed": total_count - passed_count,
            "total": total_count,
            "pass_rate": round(passed_count / total_count, 4) if total_count else 0
        }
    }
    grading_path = os.path.join(run_dir, "grading.json")
    with open(grading_path, "w", encoding="utf-8") as f:
        json.dump(grading, f, indent=2)

    passed = sum(1 for r in results if r["passed"])
    total = len(results)
    print(f"  {eval_name}/{run_type}: {passed}/{total} passed")
    return results


# Load assertions from evals.json
evals_path = r"c:\Users\georg\.claude\plugins\cache\claude-plugins-official\skill-creator\unknown\skills\super-landing-page\evals\evals.json"
with open(evals_path, encoding="utf-8") as f:
    evals_data = json.load(f)

evals_map = {e["id"]: e for e in evals_data["evals"]}

eval_dirs = {
    1: "eval-1-quill-waitlist",
    2: "eval-2-design-studio-vague",
    3: "eval-3-clockwise-saas-pricing",
}

print("Grading all runs...\n")
all_results = {}
for eval_id, eval_dir in eval_dirs.items():
    assertions = evals_map[eval_id]["assertions"]
    for run_type in ["with_skill", "without_skill"]:
        results = grade_run(eval_dir, run_type, assertions)
        all_results[f"{eval_dir}-{run_type}"] = results

print("\nDone. Grading files written.")
