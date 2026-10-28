# Luban Electrical Services website

A responsive static website for solar installation lead generation and portfolio presentation. It uses plain HTML, CSS, and JavaScript and can be hosted on any static web host.

## Run locally

Open this folder in Cursor, then run `py -m http.server 8000` in its terminal. Visit `http://localhost:8000`. If the `py` command is unavailable, try `python -m http.server 8000`.

## WhatsApp

`script.js` is configured to use Luban's supplied number, `2348096508483` (without `+`, spaces, or punctuation). Consultation links and the project enquiry form open WhatsApp with a prefilled message. The form includes the visitor's name, property type, location, and power needs.

## Portfolio media

The `assets/portfolio` folder contains the 12 supplied JPEG photos and one MP4 installation video. The portfolio shows selected photos and the playable video, with the remaining photos in an expandable gallery. The uploads appear to document rooftop panel installation and inverter/storage equipment. Project location, system capacity, savings, and customer details were not supplied and are not claimed on the page.

## Before publishing

- Confirm whether the people and property shown may be featured publicly.
- Add verified project location, system details, and approved testimonials if available.
- Confirm the WhatsApp enquiry flow on a phone.
- Upload the `luban-website` folder to a static host. No build step is required.
