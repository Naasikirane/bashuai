export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  applications: string[];
  specs: { label: string; value: string }[];
  highlight: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'balustrades' | 'partitions';
  categoryLabel: string;
  image: string;
  location: string;
  year: string;
  scope: string;
  glassSpec: string;
  aluminiumSeries: string;
  finish: string;
  details: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  type: 'finish' | 'glass' | 'hardware';
  description: string;
  colorCode?: string;
  properties: string[];
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'doors-windows',
    number: '01',
    title: 'Architectural Aluminium Doors & Windows',
    shortDesc: 'Engineered slimline profiles, heavy-duty bi-folds, tilt-and-turn casements, and panoramic multi-track sliding systems.',
    fullDesc: 'Custom fabricated using architectural-grade 6063-T6 alloy with integrated polyamide thermal-break barriers. Engineered for extreme wind loads, ultra-smooth tandem rollers, multi-point perimeter locking, and seamless flush floor thresholds.',
    applications: ['Luxury Villa Patios', 'Penthouse Openings', 'High-Traffic Storefronts', 'Commercial Office Facings'],
    specs: [
      { label: 'Thermal Performance', value: 'U-value down to 1.3 W/m²K' },
      { label: 'Air & Water Tightness', value: 'Class 4 (600 Pa) / Class 9A' },
      { label: 'Max Panel Height', value: 'Up to 3.8m per sash' },
      { label: 'Acoustic Attenuation', value: 'Up to 44 dB noise reduction' },
    ],
    highlight: 'Zero-threshold floor tracks & concealed multi-point locking',
    iconName: 'DoorClosed',
  },
  {
    id: 'curtain-walls',
    number: '02',
    title: 'Structural Curtain Walls & Facades',
    shortDesc: 'Full-height unitized and stick curtain wall systems, structural silicone glazing, and glass skylights.',
    fullDesc: 'Engineered for commercial towers, corporate headquarters, and high-end residential pavilions. Engineered with pressure-equalized internal weep drainage, thermal isolators, and structural silicone joints capable of absorbing seismic and wind deflections.',
    applications: ['Commercial Towers', 'Automotive Showrooms', 'Atriums & Canopies', 'Corporate HQs'],
    specs: [
      { label: 'System Types', value: 'Stick-built, Unitized, Point-fixed Spider' },
      { label: 'Mullion Depths', value: '50mm to 250mm structural inertia' },
      { label: 'Glazing Infill', value: '24mm to 48mm DGU / Solar Low-E' },
      { label: 'Wind Load Rating', value: 'Tested up to 3.0 kPa' },
    ],
    highlight: 'Certified deflection resistance with solar-control thermal break',
    iconName: 'Building2',
  },
  {
    id: 'balustrades-canopies',
    number: '03',
    title: 'Frameless Glass Balustrades & Railings',
    shortDesc: 'Unobstructed panoramic glass barriers with concealed structural aluminium base channels or standoff disc pins.',
    fullDesc: 'Crafted with 12mm to 21.52mm toughened laminated SentryGlas (SGP) or PVB interlayers. Securely locked into continuous extruded heavy-duty base shoe channels with dry-glaze wedge alignment systems for zero-post, unobstructed viewing.',
    applications: ['Rooftop Terraces', 'Cantilevered Balconies', 'Internal Floating Staircases', 'Pool Enclosures'],
    specs: [
      { label: 'Glass Types', value: '12mm Tempered / 17.52mm - 21.52mm Laminated' },
      { label: 'Channel Alloy', value: 'Heavy Extruded 6005-T5 Aluminium' },
      { label: 'Line Load Rating', value: '1.5 kN/m to 3.0 kN/m certified' },
      { label: 'Handrail Options', value: 'Ultra-slim slotted cap or bare polished edge' },
    ],
    highlight: 'Zero-wobble precision base wedge system with uninterrupted sightlines',
    iconName: 'ShieldCheck',
  },
  {
    id: 'office-partitions',
    number: '04',
    title: 'Acoustic Glass Partitions & Demountable Walls',
    shortDesc: 'Modular aluminium framed and frameless acoustic glass partitions for modern boardrooms, executive suites, and clinics.',
    fullDesc: 'Designed for rapid modular installation with minimal workspace disruption. Features slim 25mm–45mm anodized aluminium head and base channels, acoustic laminated double glazing, integrated micro-blinds, and pivot glass doors.',
    applications: ['Executive Boardrooms', 'Consultancy Suites', 'Co-Working Enclosures', 'Medical Centers'],
    specs: [
      { label: 'Acoustic Rating', value: 'Rw 38 dB to 48 dB sound insulation' },
      { label: 'Profile Height', value: '25mm ultra-slim perimeter frame' },
      { label: 'Door Hardware', value: 'Hydraulic bottom patch pivot hinges' },
      { label: 'Glass Finishes', value: 'Optiwhite, Frosted Banding, Fluted Reeded' },
    ],
    highlight: 'Demountable acoustic engineering with floor-spring pivot doors',
    iconName: 'LayoutGrid',
  },
  {
    id: 'shower-enclosures',
    number: '05',
    title: 'Bespoke Shower Enclosures & Mirrors',
    shortDesc: 'Heavy 10mm tempered frameless shower screens, sliding barn-door sliders, and custom LED edge-lit vanity mirrors.',
    fullDesc: 'Manufactured with factory-applied hydrophobic anti-limescale coatings and solid marine-grade 304 stainless steel or forged brass hardware. Custom mitred to out-of-plumb walls with precision silicone seals.',
    applications: ['Luxury Master Bathrooms', 'Boutique Hotel Ensuites', 'Spa Wetrooms', 'Penthouse Suites'],
    specs: [
      { label: 'Glass Thickness', value: '8mm, 10mm, 12mm Toughened Safety Glass' },
      { label: 'Surface Coating', value: 'EnduroShield / Nano-ceramic anti-stain' },
      { label: 'Hinges & Handles', value: 'Forged solid brass, PVD finish' },
      { label: 'Configurations', value: 'Walk-in, Inline sliding, 90° corner, Crittall grid' },
    ],
    highlight: 'Diamond-polished bevelled edges with anti-stain hydrophobic sealing',
    iconName: 'Sparkles',
  },
  {
    id: 'maintenance-retrofit',
    number: '06',
    title: 'Re-glazing, Retrofit & Hardware Servicing',
    shortDesc: 'Specialist replacement of failed double-glazed units, heavy sliding door wheel overhaul, and weatherproofing renewal.',
    fullDesc: 'Our experienced fabrication technicians diagnose and repair dropped sashes, degraded EPDM gaskets, broken friction stays, and foggy sealed units without requiring full frame teardowns. Rapid emergency dispatch available.',
    applications: ['Condominium Complexes', 'Commercial Properties', 'Historic Renovations', 'High-Rise Maintenance'],
    specs: [
      { label: 'Turnaround', value: 'Same-day emergency safety securing' },
      { label: 'Hardware Sourcing', value: 'OEM and universal heavy-duty replacements' },
      { label: 'Weatherization', value: 'UV-resistant silicone and Santoprene seals' },
      { label: 'Inspection', value: 'Acoustic & thermal camera air leak audit' },
    ],
    highlight: 'OEM-grade roller & gasket replacement with structural warranty',
    iconName: 'Wrench',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'The Solarium Residence Villa',
    category: 'residential',
    categoryLabel: 'Residential Glazing',
    image: '/src/assets/images/hero_architectural_glass_aluminium_1790361551375.jpg',
    location: 'Hilltop Ridge Estate',
    year: '2025',
    scope: 'Thermal-Break Sliding Facades & Corner Glass',
    glassSpec: '28mm Low-E Argon-Filled Toughened Double Glazed Unit',
    aluminiumSeries: 'Bashuai Series 70 Thermal-Break Lift-and-Slide',
    finish: 'Architectural Matt Charcoal (RAL 7016)',
    details: 'Custom engineered 3.4-meter high motorized lift-and-slide doors with recessed flush sill. Deflection tested under extreme wind conditions with seamless zero-post 90° glass-to-glass corner.',
  },
  {
    id: 'p2',
    title: 'Vanguard Corporate Tower',
    category: 'commercial',
    categoryLabel: 'Commercial Facades',
    image: '/src/assets/images/project_curtain_wall_facade_1790361560805.jpg',
    location: 'Financial Commercial District',
    year: '2025',
    scope: 'Structural Silicone Curtain Wall & Canopy',
    glassSpec: '32mm Solar Neutral Tinted Low-E Glazing',
    aluminiumSeries: 'Bashuai CW-150 Pressure Equalized Stick System',
    finish: 'Bronze Anodized 25-Micron Architectural Grade',
    details: '1,450 sq. meters of unitized curtain walling fabricated with integrated thermal isolators and automated smoke relief top-hung vents. Achieved 38% solar heat reduction.',
  },
  {
    id: 'p3',
    title: 'Azure Ocean Cantilever Terrace',
    category: 'balustrades',
    categoryLabel: 'Frameless Balustrades',
    image: '/src/assets/images/project_frameless_glass_balustrade_1790361571376.jpg',
    location: 'Coastal Heights',
    year: '2026',
    scope: 'Continuous Structural Glass Barrier',
    glassSpec: '21.52mm Toughened SentryGlas (SGP) Laminated Safety Glass',
    aluminiumSeries: 'Bashuai Mono-Channel 6005-T5 Base Shoe',
    finish: 'Natural Satin Anodized Silver',
    details: 'Engineered for coastal salt-spray and 2.5 kN high wind resistance. 68 linear meters installed with internal dry-glaze adjustment wedges providing uninterrupted horizon vistas.',
  },
  {
    id: 'p4',
    title: 'The Glass Pavilion Bi-Fold Expansion',
    category: 'residential',
    categoryLabel: 'Residential Glazing',
    image: '/src/assets/images/project_custom_aluminium_doors_windows_1790361580237.jpg',
    location: 'Meadow Garden Estate',
    year: '2026',
    scope: 'Custom 6-Panel Bi-Fold Aluminium Doors',
    glassSpec: '24mm Acoustic Laminated Double Glazed Unit',
    aluminiumSeries: 'Bashuai SlimFold Series 65',
    finish: 'Architectural Matt Black (RAL 9005)',
    details: '6-meter clear span opening connecting the chef kitchen with the garden pergola. Heavy duty stainless steel rollers allow finger-touch gliding with multipoint shootbolt security.',
  },
  {
    id: 'p5',
    title: 'Bashuai CNC Precision Workshop',
    category: 'partitions',
    categoryLabel: 'Craft & Fabrication',
    image: '/src/assets/images/craft_fabrication_workshop_1790361589833.jpg',
    location: 'Bashuai Main Fabrication Facility',
    year: '2026',
    scope: 'Advanced Profile Mitring & Structural Assembly',
    glassSpec: 'Precision CNC Mitred 6063-T6 Extrusions',
    aluminiumSeries: 'Dual-Spindle Industrial CNC Fabrication Line',
    finish: 'Direct Factory Quality Assurance',
    details: 'Where every Bashuai frame is cut, corner-crimped, and structurally sealed. Every unit undergoes automated 90-degree squareness laser validation prior to job-site delivery.',
  },
];

export const FINISH_OPTIONS = [
  { id: 'black', name: 'Architectural Matt Black', ral: 'RAL 9005', hex: '#1C1C1E', type: 'Powder Coat' },
  { id: 'bronze', name: 'Warm Bronze Anodized', ral: 'Class 25', hex: '#7A4B36', type: 'Anodized' },
  { id: 'anthracite', name: 'Anthracite Grey', ral: 'RAL 7016', hex: '#373E43', type: 'Powder Coat' },
  { id: 'silver', name: 'Natural Satin Silver', ral: 'EV1 20-Micron', hex: '#A8ADB3', type: 'Anodized' },
  { id: 'white', name: 'Traffic White Pure', ral: 'RAL 9016', hex: '#F4F4F4', type: 'Powder Coat' },
  { id: 'woodgrain', name: 'Sublimated Golden Oak', ral: 'Woodgrain', hex: '#8B5A2B', type: 'Sublimation' },
];

export const GLASS_OPTIONS = [
  { id: 'toughened-clear', name: 'Toughened Safety Glass (Single)', thickness: '8mm - 12mm', basePrice: 45, uValue: '5.6', sound: '30 dB' },
  { id: 'laminated-sgp', name: 'Structural SentryGlas Laminated', thickness: '17.52mm - 21.52mm', basePrice: 95, uValue: '4.8', sound: '36 dB' },
  { id: 'double-lowe', name: 'Double-Glazed Argon Low-E (DGU)', thickness: '24mm - 28mm', basePrice: 85, uValue: '1.4', sound: '38 dB' },
  { id: 'acoustic-pvb', name: 'Acoustic Sound-Stop Laminated', thickness: '10.76mm - 12.76mm', basePrice: 75, uValue: '4.2', sound: '42 dB' },
  { id: 'solar-tinted', name: 'Solar Reflective Neutral Bronze', thickness: '10mm - 24mm DGU', basePrice: 70, uValue: '2.1', sound: '34 dB' },
  { id: 'fluted-reeded', name: 'Fluted / Reeded Decorative Glass', thickness: '10mm Toughened', basePrice: 90, uValue: '5.2', sound: '31 dB' },
];

export const APPLICATION_PRESETS = [
  { id: 'sliding-doors', name: 'Sliding Patio Doors', baseM2: 240, minW: 1.8, minH: 2.1, defaultW: 3.0, defaultH: 2.4, icon: 'DoorClosed' },
  { id: 'bifold-doors', name: 'Bi-Fold Folding Doors', baseM2: 280, minW: 2.4, minH: 2.1, defaultW: 3.6, defaultH: 2.4, icon: 'Columns' },
  { id: 'casement-windows', name: 'Casement & Awning Windows', baseM2: 175, minW: 0.6, minH: 0.9, defaultW: 1.2, defaultH: 1.5, icon: 'Maximize2' },
  { id: 'curtain-wall', name: 'Curtain Wall Facade', baseM2: 320, minW: 3.0, minH: 3.0, defaultW: 6.0, defaultH: 3.5, icon: 'Building2' },
  { id: 'balustrade', name: 'Frameless Glass Balustrade', baseM2: 210, minW: 1.0, minH: 1.0, defaultW: 8.0, defaultH: 1.1, icon: 'ShieldCheck' },
  { id: 'office-partition', name: 'Acoustic Office Partition', baseM2: 190, minW: 2.0, minH: 2.4, defaultW: 4.5, defaultH: 2.8, icon: 'LayoutGrid' },
  { id: 'shower-screen', name: 'Bespoke Shower Enclosure', baseM2: 220, minW: 0.9, minH: 1.9, defaultW: 1.2, defaultH: 2.0, icon: 'Sparkles' },
];

export const TESTIMONIALS = [
  {
    quote: 'Bashuai delivered 42 thermal-break window units and 6 large multi-slide doors for our private residence project on schedule. The mitre corners and flush threshold seals are of superior fabrication standard.',
    author: 'Engr. Daniel Alabi',
    role: 'Principal Project Manager',
    company: 'Sterling Prime Construction',
    metric: '42 Units Delivered On Schedule',
  },
  {
    quote: 'For our showroom curtain wall, we needed certified deflection ratings and solar glass that could handle intense afternoon glare. Bashuai calculated the wind load specs and completed installation cleanly with zero leaks.',
    author: 'Kareem Olatunji',
    role: 'Lead Architect',
    company: 'Atelier Horizon Design Studio',
    metric: '38% Solar Heat Load Reduction',
  },
  {
    quote: 'The frameless glass balustrades on our rooftop patio are breathtaking. Not a single post obstructing our horizon view, and the aluminium base shoe is rock solid with zero vibration.',
    author: 'Amina Bello',
    role: 'Property Owner',
    company: 'The Palms Penthouse',
    metric: '68 Linear Meters Without Defect',
  },
];

export const FAQS = [
  {
    q: 'What is the difference between Thermal-Break and Standard Aluminium?',
    a: 'Standard aluminium is a continuous metal conductor. In Thermal-Break systems, an engineered reinforced polyamide insulating barrier is inserted between the interior and exterior aluminium extrusions. This stops heat and cold transfer, prevents interior condensation, and significantly lowers air conditioning cooling costs.',
  },
  {
    q: 'Do you carry out on-site laser measurements before cutting profiles?',
    a: 'Yes, always. Once project intent and profile specs are confirmed, a certified Bashuai fabrication technician visits your site with optical laser levels to record exact structural opening dimensions, check squareness, and calculate floor level variations.',
  },
  {
    q: 'What glass safety certifications do you use for high-elevation balustrades?',
    a: 'For balustrades and overhead canopies, we strictly fabricate using Toughened Laminated Glass with PVB or SentryGlas (SGP) structural interlayers complying with BS 6180 / EN 12600. Even under extreme point impact, the interlayers hold the glass panels intact in position.',
  },
  {
    q: 'What is your standard fabrication and installation lead time?',
    a: 'Standard anodized or powder-coated residential windows and sliding doors are fabricated in 10 to 14 business days. Specialized curtain walls or custom curved glass systems typically require 3 to 4 weeks depending on glass tempering and custom extrusions.',
  },
  {
    q: 'Do you offer warranty on powder coating and mechanical hardware?',
    a: 'Yes. Our Qualicoat architectural powder coatings carry a 15 to 20-year weather degradation warranty against peeling and UV chalking. All heavy-duty tandem rollers, friction hinges, and multi-point lock mechanisms come with a 5-year replacement warranty.',
  },
];
