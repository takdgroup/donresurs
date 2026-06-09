import fitz  # PyMuPDF
import os

pdf_path = "Презентация_Катерина_Чернышова_ROCK&ROMI.pdf"
out_txt_path = ".tmp/extracted_presentation_text.txt"

os.makedirs(".tmp", exist_ok=True)

print(f"Opening PDF: {pdf_path}")
doc = fitz.open(pdf_path)
print(f"Number of pages: {len(doc)}")

extracted_pages = []
for i, page in enumerate(doc):
    text = page.get_text()
    extracted_pages.append(f"--- PAGE {i+1} ---\n{text}\n")

with open(out_txt_path, "w", encoding="utf-8") as f:
    f.writelines(extracted_pages)

print(f"Text successfully extracted and saved to {out_txt_path}")
# Print first page text and statistics
print("\n--- FIRST 3 PAGES SAMPLES ---")
for i in range(min(3, len(doc))):
    print(f"\n--- PAGE {i+1} ---")
    print(extracted_pages[i][:1000])
