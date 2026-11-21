export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Process', to: '/process' },
  { label: 'Applications', to: '/applications' },
  { label: 'Contact', to: '/contact' },
];

export const companyAddress =
  'Survey No - 94/1/A, Village Kharsundi, Tal. Khalapur, Raigad 410202, Maharashtra, India.';

export const photos = {
  stockpile: {
    src: '/images/tyre-stockpile.jpg',
    alt: 'End-of-life tyres stacked for collection and recycling',
    credit: 'Photo by Spielvogel / Wikimedia Commons (CC0)',
    href: 'https://commons.wikimedia.org/wiki/File:Tire_piles_waiting_for_recycling.jpg',
  },
  shredder: {
    src: '/images/tyre-shredding-machine.jpg',
    alt: 'Industrial double-shaft machine used to shred tyres',
    credit: 'Unknown author / Wikimedia Commons (CC BY-SA 3.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Double_Shaft_Tire_Shredder.jpg',
  },
  shreds: {
    src: '/images/tyre-shreds.jpg',
    alt: 'A heap of shredded car tyres after size reduction',
    credit: 'Photo by TeWeBs / Wikimedia Commons (CC BY-SA 4.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Tyre_Shreds_BW.JPG',
  },
  crumb: {
    src: '/images/crumb-rubber-closeup.jpg',
    alt: 'Close-up of crumb rubber granules held in a hand',
    credit: 'Photo by Michal Ďurfina / Wikimedia Commons (CC BY-SA 4.0)',
    href: 'https://commons.wikimedia.org/wiki/File:UTB8VWb0DOaMiuJk43PTq6ySmXXaY.jpg',
  },
  steelWires: {
    src: '/images/steel-wire-coils.jpg',
    alt: 'Coils of steel wire at a material supply yard',
    credit: 'Photo by nenadstojkovicart / Flickr (CC BY 2.0)',
    href: 'https://www.flickr.com/photos/202846129@N03/54552184912',
    caption: 'Illustrative steel-wire photograph',
  },
  nylonFibres: {
    src: '/images/nylon-fibre.jpg',
    alt: 'Scanning electron microscope photograph of a nylon fibre',
    credit: 'CSIRO / Wikimedia Commons (CC BY 3.0; resized)',
    href: 'https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_7232_Nylon_fibre.jpg',
    caption: 'Nylon fibre photomicrograph',
  },
  calender: {
    src: '/images/rubber-calender.jpg',
    alt: 'Rubber compound moving through a calender machine',
    credit: 'Photo by Cjp24 / Wikimedia Commons (CC BY-SA 3.0)',
    href: 'https://commons.wikimedia.org/wiki/File:Calender_machine.jpg',
  },
};

export const productCategories = [
  {
    number: '01',
    slug: 'crumb-rubber',
    name: 'Crumb rubber',
    description:
      'A confirmed VALMERK product category. Particle size, grade, packaging and availability require direct confirmation.',
    detail:
      'Crumb rubber is the confirmed product category. Particle size, grade, packaging and availability should be confirmed directly with VALMERK.',
    image: photos.crumb,
    tone: 'amber',
    confirmationPoints: ['Particle size', 'Grade or material description', 'Packaging', 'Availability'],
  },
  {
    number: '02',
    slug: 'steel-wires',
    name: 'Steel Wires',
    description:
      'A confirmed VALMERK product category. Wire form, condition, grade and availability require direct confirmation.',
    detail:
      'Steel Wires are a confirmed product category. Wire form, condition, grade, packaging and availability should be confirmed directly with VALMERK.',
    image: photos.steelWires,
    tone: 'slate',
    confirmationPoints: ['Wire form and condition', 'Material description', 'Packaging', 'Availability'],
  },
  {
    number: '03',
    slug: 'nylon-fibres',
    name: 'Nylon Fibres',
    description:
      'A confirmed VALMERK product category, distinct from the broader textile-fibre category. Grade, condition and availability require direct confirmation.',
    detail:
      'Nylon Fibres are a confirmed product category, distinct from the broader textile-fibre category. Fibre description, condition, packaging and availability should be confirmed directly with VALMERK.',
    image: photos.nylonFibres,
    tone: 'light',
    confirmationPoints: ['Fibre description and condition', 'Length or other specification', 'Packaging', 'Availability'],
  },
];

export const processStages = [
  {
    number: '01',
    title: 'Material sourcing',
    description:
      'Suitable feedstock is identified and origin, composition and handling needs are reviewed.',
    image: photos.stockpile,
  },
  {
    number: '02',
    title: 'Sorting & preparation',
    description:
      'Incoming material may be inspected, sorted and prepared for the selected processing route.',
    image: photos.shredder,
  },
  {
    number: '03',
    title: 'Shredding & size reduction',
    description:
      'Mechanical size reduction can turn whole tyres into smaller pieces for subsequent stages.',
    image: photos.shreds,
  },
  {
    number: '04',
    title: 'Granulation & separation',
    description:
      'Further reduction can produce rubber granules while separation stages recover other material fractions.',
    image: photos.shreds,
  },
  {
    number: '05',
    title: 'Inspection & handling',
    description:
      'Recovered material may be reviewed against agreed criteria, then prepared for storage or onward handling.',
  },
];

export const possibleApplications = [
  {
    number: '01',
    title: 'Rubber-modified construction materials',
    detail:
      'Potential uses depend on material characteristics, formulation and applicable project requirements.',
  },
  {
    number: '02',
    title: 'Moulded rubber products',
    detail:
      'Recycled or processed rubber may be considered where a producer validates the material for its formulation.',
  },
  {
    number: '03',
    title: 'Industrial surfaces',
    detail:
      'Rubber-derived materials may be relevant to selected surface systems, subject to technical and regulatory review.',
  },
  {
    number: '04',
    title: 'Infrastructure & vibration control',
    detail:
      'Potential applications are determined by design, performance testing and project-specific acceptance criteria.',
  },
];
