# VALMERK Rubber Industries website

A responsive corporate website built with React, Vite and React Router. It
includes six main pages and a dedicated detail page for each confirmed product
category, with locally stored industry and material photography.

## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` — Home
- `/about` — About VALMERK
- `/products` — Confirmed product categories
- `/products/crumb-rubber` — Crumb Rubber details
- `/products/steel-wires` — Steel Wires details
- `/products/nylon-fibres` — Nylon Fibres details
- `/process` — General tyre-recycling process overview
- `/applications` — Potential industry uses
- `/contact` — Address and enquiry form

## Content verification

Company information supplied for this project includes the name, industry,
address and confirmed product categories: Crumb Rubber, Steel Wires and Nylon
Fibres.

> Survey No - 94/1/A, Village Kharsundi, Tal. Khalapur, Raigad 410202,
> Maharashtra, India.

No product grades or specifications, operating process, equipment, testing
method, certification, production capacity, history, phone number, email
address, customer list or performance claim was provided. Nylon Fibres are
identified separately from textile fibres. Process stages and applications
are explicitly identified as general industry illustrations.

The contact form has no backend and does not send or store enquiries. It opens
the visitor's email application with the entered details prepared as a draft;
the visitor must add VALMERK's verified email address before sending.

## Image credits and licences

All photographs are stored in `public/images/`. Tyre-processing photographs
show general industry. Steel-wire and nylon-fibre product photos are material
references, not images of VALMERK stock, facilities or processing.

- `tyre-stockpile.jpg` — Spielvogel, “Tire piles waiting for recycling,”
  Wikimedia Commons, CC0:
  <https://commons.wikimedia.org/wiki/File:Tire_piles_waiting_for_recycling.jpg>
- `tyre-shredding-machine.jpg` — author listed as unknown, “Double Shaft Tire
  Shredder,” Wikimedia Commons, CC BY-SA 3.0:
  <https://commons.wikimedia.org/wiki/File:Double_Shaft_Tire_Shredder.jpg>
- `tyre-shreds.jpg` — TeWeBs, “Tyre Shreds BW,” Wikimedia Commons,
  CC BY-SA 4.0:
  <https://commons.wikimedia.org/wiki/File:Tyre_Shreds_BW.JPG>
- `crumb-rubber-closeup.jpg` — Michal Ďurfina, “rubber crumb,” Wikimedia
  Commons, CC BY-SA 4.0:
  <https://commons.wikimedia.org/wiki/File:UTB8VWb0DOaMiuJk43PTq6ySmXXaY.jpg>
- `steel-wire-coils.jpg` — nenadstojkovicart, “Steel wire coils and wrapped
  pallets at construction supply yard,” Flickr, CC BY 2.0:
  <https://www.flickr.com/photos/202846129@N03/54552184912>
- `nylon-fibre.jpg` — CSIRO, “CSIRO ScienceImage 7232 Nylon fibre,” Wikimedia
  Commons, CC BY 3.0 (resized to 960 pixels for this site):
  <https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_7232_Nylon_fibre.jpg>
- `rubber-calender.jpg` — Cjp24, “Calender machine,” Wikimedia Commons,
  CC BY-SA 3.0:
  <https://commons.wikimedia.org/wiki/File:Calender_machine.jpg>

The corresponding photo credits and source links are also shown alongside
photographs on the website. Review the linked file pages and licence terms
before republishing the assets outside this project.
