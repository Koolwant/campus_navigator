// Campus Navigator — Verdant State University
// Complete frontend-only collegiate wayfinding & map engine

const PLACES = [
  {
    id: 'clock',
    name: 'Aster Clocktower & Plaza',
    code: 'PLAZA-01',
    category: 'landmark',
    badge: 'Campus Center',
    icon: '⌁',
    x: 510,
    y: 245,
    node: 'clock',
    description: 'The historic 1892 stone belltower and central meeting concourse of Verdant State. Houses the campus visitor information booth and 24/7 security dispatch kiosk.',
    hours: 'Open 24 Hours',
    isOpen: true,
    busyLevel: 'Moderate crowd',
    accessibility: ['Level bluestone plaza', 'Tactile guide paths', 'Audible chime beacon every 15 min', 'Emergency call box'],
    amenities: ['Visitor info kiosk', 'Emergency call box', 'Solar charging benches', 'Outdoor Wi-Fi', 'Lost & found drop'],
    floors: [
      { level: 'Ground Concourse', rooms: ['Visitor Information Kiosk', 'Campus Security Dispatch (Rm 01)', 'Tour Ambassador Staging', 'Automated Campus Directory'] }
    ]
  },
  {
    id: 'library',
    name: 'Nightingale Memorial Library',
    code: 'LIB-01',
    category: 'library',
    badge: 'Main Library',
    icon: '▥',
    x: 360,
    y: 245,
    node: 'library',
    description: 'Five-tier research repository with over 800,000 physical volumes, 48 reservable media studios, digital archives, and the popular student-run Night Owl Café.',
    hours: '07:00 — 02:00 Daily',
    isOpen: true,
    busyLevel: 'High activity',
    accessibility: ['Automatic push-plate sliding portals', 'Dual high-capacity elevator bank', 'Braille shelf identifiers', 'All-gender accessible washrooms on all levels', 'Audio-assisted assistive tech lab'],
    amenities: ['High-speed laser printing', 'Quiet silent-study zone', 'Water refill station (cold/filtered)', 'Night Owl Café & Bakery', 'Laptop loaner lockers', 'Book return chutes'],
    floors: [
      { level: 'Level 1 · Welcome Commons', rooms: ['Circulation & Course Reserves', 'Night Owl Café', 'IT Help Desk & Tech Checkout', 'Accessible Restrooms'] },
      { level: 'Level 2 · Media Hub & Printing', rooms: ['Digital Media Lab (Rm 201)', 'High-Capacity Plotter & Print Hub', 'Group Collaboration Pods A–H', 'Student Meeting Suites'] },
      { level: 'Level 3 · Silent Reading Stacks', rooms: ['Periodicals & Special Collections', 'Quiet Carrels 301–340', 'Microform Archive', 'Individual Study Cubicles'] },
      { level: 'Level 4 · Faculty & Graduate Suites', rooms: ['Doctoral Research Carrels', 'Scholarly Publishing Office', 'Humanities Archive', 'Restrooms (ADA)'] },
      { level: 'Level 5 · Sky Reading Room', rooms: ['Panoramic Campus Reading Hall', 'Rare Manuscript Vault (By Appt)', 'Endowed Scholars Library'] }
    ]
  },
  {
    id: 'turing',
    name: 'Alan Turing Hall of Computing',
    code: 'ENG-04',
    category: 'academic',
    badge: 'STEM Block',
    icon: '⌘',
    x: 545,
    y: 388,
    node: 'turing',
    description: 'Premier facility for Computer Science, Electrical Engineering, Data Science, and Cognitive Robotics. Features state-of-the-art server arrays and open collaborative maker-lounges.',
    hours: '06:30 — 23:00 (Keycard 24h)',
    isOpen: true,
    busyLevel: 'High activity',
    accessibility: ['Graded East ADA Ramp with handrails', 'Voice-announced elevator', 'Wide-aisle tiered lecture halls', 'Adjustable height lab workbenches', 'Wheelchair seating boxes in Lecture Hall 0.12'],
    amenities: ['Applied Intelligence Robotics Lab', 'Hardware Fabrication Makerspace', 'Dual monitor coding stations', 'Bicycle repair stand & shelter', 'Filtered water fountains'],
    floors: [
      { level: 'Ground Floor', rooms: ['Dean of Engineering Suite', 'Auditorium 0.12 (Capacity 280)', 'CS Advising Office (Rm 08)', 'Accessible Restrooms'] },
      { level: 'Level 1 · Instructional Labs', rooms: ['Systems Lab 102', 'Networks & Cybersecurity Lab 105', 'Undergraduate Help Commons', 'Hardware Locker Room'] },
      { level: 'Level 2 · Applied Intelligence', rooms: ['Applied Intelligence & ML Lab 204', 'Autonomous Systems Bay 210', 'Faculty Offices 220–245', 'Conference Room 250'] },
      { level: 'Level 3 · Robotics & Capstone', rooms: ['Robotics Studio (Room 302)', 'Embedded Systems Workshop 314', 'Senior Capstone Design Studio', 'Quiet Graduate Lab'] }
    ]
  },
  {
    id: 'civic',
    name: 'Civic Forum & Humanities Hall',
    code: 'HUM-02',
    category: 'academic',
    badge: 'Humanities',
    icon: '▤',
    x: 700,
    y: 325,
    node: 'civic',
    description: 'An architecturally celebrated natural-light atrium housing History, Literature, Philosophy, and Political Science with seminar amphitheatres and the campus Writing Commons.',
    hours: '08:00 — 21:00 Mon–Fri',
    isOpen: true,
    busyLevel: 'Moderate crowd',
    accessibility: ['Continuous step-free south entry plaza', 'Two ADA-compliant passenger elevators', 'Hearing induction loops in amphitheatres', 'Single-occupant gender neutral restrooms'],
    amenities: ['Campus Writing Center', 'Open sunlit central forum', 'Faculty mail & dispatch', 'Wireless presentation projectors', 'Vending lounge'],
    floors: [
      { level: 'Ground Floor · Central Atrium', rooms: ['Forum Commons Desk', 'Amphitheatre A (Capacity 190)', 'The Daily Student Press Bureau', 'Restrooms (Accessible)'] },
      { level: 'Level 1 · Writing & Languages', rooms: ['Campus Writing Center (Rm 104)', 'Modern Languages Audio Studio', 'Philosophy Seminar Suite 112', 'Faculty Lounge'] },
      { level: 'Level 2 · History & Politics', rooms: ['Diplomacy & Mock Courtroom', 'Department of History Suite 201', 'Graduate Reading Room 218', 'Seminar Rooms 220–228'] }
    ]
  },
  {
    id: 'biosphere',
    name: 'Biosphere Integrated Life Sciences',
    code: 'SCI-08',
    category: 'lab',
    badge: 'Research Lab',
    icon: '◈',
    x: 815,
    y: 210,
    node: 'biosphere',
    description: 'Cutting-edge biological and environmental research center with climate-controlled rooftop greenhouses, gene-sequencing suites, and containment level wet labs.',
    hours: '08:00 — 19:00 (Badge 24h)',
    isOpen: true,
    busyLevel: 'Normal flow',
    accessibility: ['Direct grade-level airlock entry', 'Chemical-safe wide freight/passenger elevator', 'Emergency eye-wash stations', 'Step-free lab counters and fume hoods'],
    amenities: ['Rooftop botanical greenhouse', 'Spectroscopy core', 'Refrigerated sample repository', 'Bio-waste safe disposal', 'Hazard decontamination showers'],
    floors: [
      { level: 'Ground Floor · Foundation Labs', rooms: ['Introductory Biology Labs 1–4', 'Chemical Preparation Kitchen', 'Safety Coordination Office', 'All-Gender Restrooms'] },
      { level: 'Level 1 · Molecular Research', rooms: ['Gene Sequencing Core (Rm 112)', 'Cell Culture Facility 118', 'Bioinformatics Suite 125', 'Postdoc Workspaces'] },
      { level: 'Level 2 · Botanical Canopy', rooms: ['Rooftop Climate Greenhouse Bridge', 'Plant Pathology Lab 204', 'Ecology Herbarium & Specimen Bank', 'Faculty Offices'] }
    ]
  },
  {
    id: 'union',
    name: 'Juniper Student Union & Dining',
    code: 'STU-01',
    category: 'dining',
    badge: 'Dining & Social',
    icon: '✦',
    x: 540,
    y: 570,
    node: 'union',
    description: 'The vibrant crossroads of campus life. Features the Great Oaks Food Hall, university bookstore, credit union ATMs, student government chambers, and parcel lockers.',
    hours: '06:30 — 00:00 Daily',
    isOpen: true,
    busyLevel: 'Very high crowd',
    accessibility: ['Automatic double glass doors', 'Central glass passenger elevator', 'Wide dining traffic lanes', 'Family and all-gender accessible restrooms with changing tables'],
    amenities: ['Great Oaks Multi-Station Food Hall', 'University Bookstore & Merch', 'Campus Credit Union ATM', '24/7 Smart parcel locker bank', 'Student Organization Cubicles'],
    floors: [
      { level: 'Ground Floor · Food Hall & Retail', rooms: ['Great Oaks Food Hall (6 vendors)', 'Juniper Espresso Roasters', 'University Bookstore & Tech Supply', 'ATM Banking Alcove', 'Accessible Restrooms'] },
      { level: 'Level 1 · Student Life & Orgs', rooms: ['Associated Students Government Suite', 'Student Activities Council Desk', 'Multicultural Center Lounge', 'Grand Ballroom & Event Hall'] },
      { level: 'Level 2 · Wellbeing & Quiet Rooms', rooms: ['Reflection & Meditation Space', 'Peer Mentoring Drop-in Center', 'Commuter Student Day Lounge', 'Game & Recreation Hall'] }
    ]
  },
  {
    id: 'studio',
    name: 'Morrow Fine Arts & Fabrication',
    code: 'ART-03',
    category: 'arts',
    badge: 'Creative Arts',
    icon: '◒',
    x: 332,
    y: 525,
    node: 'studio',
    description: 'Dedicated complex for visual arts, industrial design, sculpture, digital animation, and printmaking with high-ceiling north-lit exhibition galleries.',
    hours: '08:00 — 22:00 Daily',
    isOpen: true,
    busyLevel: 'Normal flow',
    accessibility: ['Paved West Ramp with continuous tactile guide', 'Heavy-duty freight elevator', 'Adjustable pottery throwing wheels', 'Accessible paint washing sinks'],
    amenities: ['Morrow Public Gallery', 'Laser cutting & 3D prototyping shop', 'Traditional wet darkroom', 'Ceramics kilns & glaze studio', 'Student project storage lockers'],
    floors: [
      { level: 'Ground Floor · Heavy Workshops', rooms: ['Main Gallery & Public Exhibition', 'Woodworking & Metal Fabrication', 'Ceramics Kiln Room', 'Accessible Restrooms'] },
      { level: 'Level 1 · Drawing & Painting', rooms: ['North-Lit Painting Studios A–D', 'Printmaking & Intaglio Press Room', 'Art History Lecture Hall 120'] },
      { level: 'Level 2 · Digital Media', rooms: ['Animation & VFX Lab 202', 'Photography Studio & Darkroom', 'Senior BFA Exhibition Suites'] }
    ]
  },
  {
    id: 'health',
    name: 'Oasis Campus Health & Wellness',
    code: 'HLTH-01',
    category: 'health',
    badge: 'Medical Clinic',
    icon: '✚',
    x: 760,
    y: 555,
    node: 'health',
    description: 'Comprehensive health clinic providing acute urgent care, preventative checkups, pharmacy dispensary, and confidential mental health counseling.',
    hours: '08:00 — 20:00 (Emergency Nurse 24h)',
    isOpen: true,
    busyLevel: 'Low crowd',
    accessibility: ['Fully step-free ambulance-rated portico entrance', 'Low-sensory quiet waiting lounge', 'Bariatric and wheelchair examination suites', 'Automatic sliding doors throughout'],
    amenities: ['Urgent care drop-in clinic', 'Prescription pharmacy pickup window', 'Confidential mental wellness pods', 'Immunization & travel clinic', 'Accessible private restrooms'],
    floors: [
      { level: 'Ground Floor · Urgent Care', rooms: ['Triage & Check-in Desk', 'Urgent Care Bays 1–6', 'Prescription Dispensary Window', 'Accessible Family Restrooms'] },
      { level: 'Level 1 · Counseling & Wellness', rooms: ['Mental Health & Counseling Suites', 'Nutrition & Lifestyle Consultation', 'Relaxation & Biofeedback Room', 'Administrative Offices'] }
    ]
  },
  {
    id: 'harbor',
    name: 'Harbor Quad Residential Halls',
    code: 'RES-08',
    category: 'hostel',
    badge: 'Student Housing',
    icon: '⌂',
    x: 945,
    y: 500,
    node: 'harbor',
    description: 'Modern residential community hosting 1,200 undergraduate students across East and West wings, surrounded by landscaped recreational courtyards and study pavilions.',
    hours: 'Keycard Access 24 Hours',
    isOpen: true,
    busyLevel: 'Residents only',
    accessibility: ['Zero-barrier courtyard approaches', 'Accessible suite floorplans with roll-in showers', 'Audio-visual fire alarm strobes', 'Elevators serving all 5 residential floors'],
    amenities: ['Community laundry suites', 'Communal demo kitchen & dining', 'Soundproof music practice rooms', '24-hour study lounges', 'Secure bike storage rooms'],
    floors: [
      { level: 'Ground Floor · Residential Hub', rooms: ['Residence Life Reception Desk', 'Mail & Package Dispatch Room', 'Community Commons & Fireside Lounge', 'Shared Kitchen & Café Area'] },
      { level: 'Levels 1–5 · Living Quarters', rooms: ['Residential Suites 101–540', 'Floor Study Lounges', 'Laundry Facilities (Even floors)', 'Resident Advisor Stations'] }
    ]
  },
  {
    id: 'athletics',
    name: 'Varsity Fieldhouse & Recreation',
    code: 'REC-05',
    category: 'sports',
    badge: 'Athletics & Gym',
    icon: '◌',
    x: 930,
    y: 680,
    node: 'athletics',
    description: 'The athletic powerhouse of campus: olympic-standard 50m aquatic center, indoor 3-court basketball arena, 45-foot bouldering wall, and cardiovascular fitness floor.',
    hours: '05:30 — 22:30 Daily',
    isOpen: true,
    busyLevel: 'High activity',
    accessibility: ['Grade level entrance with power doors', 'Hydraulic pool access lift', 'Wheelchair accessible locker & shower suites', 'Elevator to elevated indoor running track'],
    amenities: ['Olympic swimming & diving pool', 'Free-weight strength zone', '45ft climbing & bouldering wall', 'Cardio mezzanine with park views', 'Locker rooms & towel service'],
    floors: [
      { level: 'Ground Floor · Arena & Aquatics', rooms: ['Main Athletics Check-in Desk', 'Aquatic Center & Lap Pool', 'Basketball Arena Courts 1–3', 'Locker Rooms & Saunas (ADA)'] },
      { level: 'Level 1 · Fitness Mezzanine', rooms: ['Cardiovascular Equipment Deck', 'Free Weights & Olympic Racks', 'Bouldering Wall Peak & Belay Staging', 'Group Fitness Studio A/B'] }
    ]
  },
  {
    id: 'admin',
    name: 'Fern Hall Administrative Center',
    code: 'ADM-01',
    category: 'admin',
    badge: 'Administration',
    icon: '▦',
    x: 260,
    y: 340,
    node: 'admin',
    description: 'Central bureaucratic nerve center for student enrollment, registrar, financial aid, international scholar services, and university executive leadership.',
    hours: '08:30 — 17:00 Mon–Fri',
    isOpen: true,
    busyLevel: 'Moderate crowd',
    accessibility: ['East ADA ramp with gentle 1:16 incline', 'Low-profile service counters', 'Hearing enhancement transceivers', 'Elevator to executive chambers'],
    amenities: ['Registrar window', 'Financial Aid counselor pods', 'International Student Services', 'Cashier & Student Accounts', 'Official transcript kiosk'],
    floors: [
      { level: 'Ground Floor · Student Services', rooms: ['One-Stop Student Services Desk', 'Registrar Service Windows 1–4', 'Financial Aid Intake Desks', 'Accessible Restrooms'] },
      { level: 'Level 1 · Executive & International', rooms: ['International Scholar Advising', 'Office of the University President', 'Provost Conference Chambers', 'Board of Trustees Hall'] }
    ]
  }
];

// Graph Nodes (Coordinates on the 1200 x 800 SVG coordinate plane)
const NODES = {
  admin: [250, 385],
  library: [405, 300],
  clock: [520, 305],
  turing: [580, 430],
  civic: [710, 380],
  biosphere: [815, 270],
  union: [555, 610],
  studio: [370, 575],
  health: [750, 600],
  harbor: [915, 540],
  athletics: [900, 650],
  west: [320, 430],
  central: [510, 430],
  north: [590, 300],
  east: [760, 430],
  south: [550, 525],
  garden: [690, 520],
  lake: [845, 525],
  quad: [455, 345]
};

// Paths connecting nodes.
// Each edge carries: distance (meters), stairs (boolean), covered (boolean), lit (boolean)
const EDGES_DATA = [
  ['admin', 'library', 110, false, true, true],
  ['admin', 'west', 100, false, false, true],
  ['library', 'clock', 100, false, true, true],
  ['library', 'quad', 70, false, false, true],
  ['clock', 'north', 85, false, false, true],
  ['clock', 'quad', 80, false, false, true],
  ['quad', 'central', 90, false, false, true],
  ['quad', 'west', 105, false, false, true],
  ['west', 'studio', 150, true, false, false],     // Old stone stairs (avoided by wheelchair)
  ['west', 'central', 190, false, true, true],
  ['central', 'turing', 75, false, false, true],
  ['central', 'civic', 160, false, false, true],
  ['central', 'south', 110, false, true, true],     // Covered promenade
  ['north', 'civic', 140, false, false, true],
  ['north', 'biosphere', 230, false, false, true],
  ['civic', 'biosphere', 160, false, false, true],
  ['civic', 'east', 90, false, false, true],
  ['turing', 'south', 120, false, false, false],
  ['south', 'union', 95, false, true, true],       // Covered student arcade
  ['south', 'garden', 150, false, false, true],
  ['union', 'studio', 190, false, false, true],
  ['union', 'health', 220, false, false, true],
  ['garden', 'health', 100, false, false, true],
  ['garden', 'east', 100, false, false, true],
  ['east', 'lake', 125, false, true, true],
  ['east', 'harbor', 220, true, false, false],     // Terraced slope steps
  ['lake', 'harbor', 100, false, false, true],
  ['lake', 'athletics', 150, false, false, true],
  ['health', 'harbor', 180, false, false, true],
  ['health', 'athletics', 175, false, false, true],
  ['harbor', 'athletics', 160, false, false, true]
];

// Build adjacency graph
const GRAPH = {};
Object.keys(NODES).forEach(n => { GRAPH[n] = []; });
EDGES_DATA.forEach(([from, to, dist, stairs, covered, lit]) => {
  GRAPH[from].push({ to, dist, stairs, covered, lit });
  GRAPH[to].push({ to: from, dist, stairs, covered, lit });
});

// App State
let state = {
  theme: 'day',             // 'day' | 'night' | 'blueprint'
  start: 'clock',
  end: 'turing',
  profile: 'walk',          // 'walk' | 'accessible' | 'sheltered' | 'night'
  selected: null,           // building id when drawer is open
  activeFloorIdx: 0,        // floor tab in building detail drawer
  search: '',
  filterCategory: 'all',    // category filter
  showDirectory: false,
  showAmenities: true,
  running: false,           // route simulation running
  simProgress: 0,
  zoom: 1,
  tx: 0,
  ty: 0,
  routeResult: null
};

// Dijkstra Pathfinding Engine
function calculateRoute(startNode, endNode, profile) {
  if (startNode === endNode) {
    return { path: [startNode], distance: 0, edges: [], instructions: [{ text: 'You are already at your destination.', dist: 0, node: startNode }] };
  }

  const dist = {};
  const prev = {};
  const visited = new Set();
  const allNodes = Object.keys(NODES);

  allNodes.forEach(n => { dist[n] = Infinity; });
  dist[startNode] = 0;

  while (visited.size < allNodes.length) {
    let closest = null;
    let minVal = Infinity;
    for (const n of allNodes) {
      if (!visited.has(n) && dist[n] < minVal) {
        minVal = dist[n];
        closest = n;
      }
    }

    if (!closest || minVal === Infinity) break;
    if (closest === endNode) break;
    visited.add(closest);

    const neighbors = GRAPH[closest] || [];
    for (const edge of neighbors) {
      // Accessibility check: strictly prune stairs
      if (profile === 'accessible' && edge.stairs) continue;

      let weight = edge.dist;
      // Sheltered preference: penalize uncovered paths, favor covered
      if (profile === 'sheltered') {
        weight *= edge.covered ? 0.6 : 1.35;
      }
      // Night walk safety preference: favor illuminated pathways
      if (profile === 'night') {
        weight *= edge.lit ? 0.75 : 1.6;
      }

      if (dist[closest] + weight < dist[edge.to]) {
        dist[edge.to] = dist[closest] + weight;
        prev[edge.to] = { node: closest, edge };
      }
    }
  }

  const path = [];
  const edges = [];
  let curr = endNode;
  while (curr) {
    path.unshift(curr);
    if (prev[curr]) {
      edges.unshift(prev[curr].edge);
      curr = prev[curr].node;
    } else {
      break;
    }
  }

  // If path doesn't reach startNode, no valid route exists under constraint
  if (path[0] !== startNode) {
    return { path: [startNode], distance: 0, edges: [], instructions: [{ text: 'No route available under the current mobility constraint.', dist: 0, node: startNode }] };
  }

  const totalDistance = Math.round(edges.reduce((sum, e) => sum + e.dist, 0));
  const instructions = generateTurnInstructions(path, edges, profile);

  return { path, distance: totalDistance, edges, instructions };
}

function getPlaceByNode(nodeId) {
  return PLACES.find(p => p.node === nodeId || p.id === nodeId);
}

function getPlaceById(id) {
  return PLACES.find(p => p.id === id);
}

function getNodeFriendlyName(n) {
  const p = getPlaceByNode(n);
  if (p) return p.name;
  const names = {
    quad: "Founders' Central Quad",
    central: 'North-South Arterial Cross',
    garden: 'Juniper Botanical Gardens',
    lake: 'Reflecting Lake Boardwalk',
    east: 'East Campus Promenade',
    south: 'South Quad Junction',
    west: 'Arts & Archives Walkway',
    north: 'Science Quad Promenade'
  };
  return names[n] || 'Campus Connector';
}

function generateTurnInstructions(path, edges, profile) {
  if (path.length <= 1) return [{ text: 'Arrive at location.', dist: 0, node: path[0] }];
  const steps = [];

  for (let i = 0; i < path.length - 1; i++) {
    const fromNode = path[i];
    const toNode = path[i + 1];
    const edge = edges[i];
    const targetName = getNodeFriendlyName(toNode);
    const dist = edge ? edge.dist : 50;

    let text = '';
    if (i === 0) {
      text = `Depart from ${getNodeFriendlyName(fromNode)} toward ${targetName}`;
    } else if (i === path.length - 2) {
      text = `Follow path directly into ${targetName}`;
    } else {
      text = `Pass through ${targetName}`;
    }

    if (edge?.covered) text += ' (covered breezeway)';
    if (edge?.stairs && profile !== 'accessible') text += ' [Contains stone steps]';
    if (profile === 'accessible' && i === 0) text += ' [Certified step-free path]';

    steps.push({ text, dist, node: toNode });
  }

  return steps;
}

function updateRoute() {
  state.routeResult = calculateRoute(state.start, state.end, state.profile);
}

function estimateTimeMinutes(dist) {
  // Average comfortable campus walking speed: ~78 meters per minute (4.7 km/h)
  return Math.max(1, Math.round(dist / 78));
}

function estimateSteps(dist) {
  return Math.round(dist * 1.32);
}

function estimateCalories(dist) {
  return Math.max(5, Math.round(dist * 0.046));
}

// Coordinate string for SVG polyline
function getRoutePointsString() {
  if (!state.routeResult || !state.routeResult.path) return '';
  return state.routeResult.path.map(n => NODES[n].join(',')).join(' ');
}

// Filtered places for directory & search
function getFilteredPlaces() {
  const q = state.search.toLowerCase().trim();
  const cat = state.filterCategory;

  return PLACES.filter(p => {
    const matchesCat = cat === 'all' || p.category === cat;
    if (!matchesCat) return false;
    if (!q) return true;

    const searchableText = [
      p.name,
      p.code,
      p.category,
      p.badge,
      p.description,
      ...p.amenities,
      ...p.accessibility,
      ...(p.floors || []).flatMap(f => f.rooms)
    ].join(' ').toLowerCase();

    return searchableText.includes(q);
  });
}

// Primary Render Engine
const appEl = document.querySelector('#app');

function render() {
  updateRoute();

  const estMins = estimateTimeMinutes(state.routeResult.distance);
  const estStepCount = estimateSteps(state.routeResult.distance);
  const estCals = estimateCalories(state.routeResult.distance);

  appEl.innerHTML = `
    <main class="shell ${state.theme}">
      <!-- Top Navigation Bar -->
      <header class="topbar">
        <button class="brand" data-action="home" title="Verdant State University Campus Navigator">
          <span class="brand-mark">⌖</span>
          <span>
            <small class="brand-sub">VERDANT STATE UNIVERSITY</small>
            <b>Campus Navigator</b>
          </span>
        </button>

        <div class="campus-status" aria-live="polite">
          <span class="live-dot" title="Campus Operations Active"></span>
          <span class="campus-name">Main Academic Campus (140 Acres)</span>
          <span class="sep"></span>
          <span class="campus-clock">Spring Term · Week 8</span>
          <span class="sep"></span>
          <span class="campus-weather">⛅ 68°F · Mild & Clear</span>
        </div>

        <div class="top-actions">
          <button class="action-btn directory-trigger" data-action="directory" title="Search directory & rooms (Press /)">
            <span class="btn-icon">⌕</span>
            <span class="btn-label">Directory</span>
            <kbd class="key-hint">/</kbd>
          </button>
          <button class="action-btn" data-action="amenities" title="Toggle amenity map pins">
            <span class="btn-icon">◈</span>
            <span class="btn-label">Amenities</span>
          </button>
          <div class="user-chip" title="Active Student Profile: Jane Scholar">
            <span class="avatar">JS</span>
            <span class="user-name">Jane S.</span>
          </div>
        </div>
      </header>

      <!-- Main Two-Column Layout -->
      <div class="workspace">
        <!-- Sidebar Navigation & Route Planning Panel -->
        <aside class="nav-panel" id="nav-panel">
          <div class="panel-head">
            <div>
              <p class="eyebrow">INTELLIGENT WAYFINDING</p>
              <h1>Find your way on campus</h1>
            </div>
            <button class="close-mobile-btn" data-action="hide-panel" aria-label="Close navigation panel">×</button>
          </div>

          <!-- Origin & Destination Form -->
          <div class="route-box">
            <div class="input-row start-row">
              <span class="dot-indicator start-dot" title="Starting location"></span>
              <div class="select-container">
                <label for="start-node-select">STARTING POINT</label>
                <select id="start-node-select" aria-label="Choose starting location">
                  ${PLACES.map(p => `
                    <option value="${p.node}" ${p.node === state.start ? 'selected' : ''}>
                      ${p.name} (${p.code})
                    </option>
                  `).join('')}
                </select>
              </div>
            </div>

            <div class="input-row end-row">
              <span class="dot-indicator end-dot" title="Destination"></span>
              <div class="select-container">
                <label for="end-node-select">DESTINATION</label>
                <select id="end-node-select" aria-label="Choose destination">
                  ${PLACES.map(p => `
                    <option value="${p.node}" ${p.node === state.end ? 'selected' : ''}>
                      ${p.name} (${p.code})
                    </option>
                  `).join('')}
                </select>
              </div>
              <button class="swap-nodes-btn" data-action="swap-nodes" title="Reverse origin and destination">
                ⇄
              </button>
            </div>

            <button class="loc-anchor-btn" data-action="reset-location">
              ◎ Set current location to Aster Clocktower
            </button>
          </div>

          <!-- Mobility & Routing Profile Switcher -->
          <div class="profile-section">
            <p class="section-label">ROUTING PREFERENCE</p>
            <div class="profile-grid" role="radiogroup" aria-label="Route preference">
              <button data-profile="walk" class="profile-card ${state.profile === 'walk' ? 'active' : ''}">
                <span class="profile-icon">↗</span>
                <span class="profile-name">Fastest</span>
                <small class="profile-sub">Optimal walk</small>
              </button>
              <button data-profile="accessible" class="profile-card ${state.profile === 'accessible' ? 'active' : ''}">
                <span class="profile-icon">♿</span>
                <span class="profile-name">Step-Free</span>
                <small class="profile-sub">Ramps only</small>
              </button>
              <button data-profile="sheltered" class="profile-card ${state.profile === 'sheltered' ? 'active' : ''}">
                <span class="profile-icon">⌂</span>
                <span class="profile-name">Sheltered</span>
                <small class="profile-sub">Breezeways</small>
              </button>
              <button data-profile="night" class="profile-card ${state.profile === 'night' ? 'active' : ''}">
                <span class="profile-icon">☾</span>
                <span class="profile-name">Well-Lit</span>
                <small class="profile-sub">Safety paths</small>
              </button>
            </div>
          </div>

          <!-- Journey Metrics Card -->
          <div class="journey-card">
            <div class="journey-header">
              <span class="journey-badge">
                ${state.profile === 'accessible' ? '♿ STEP-FREE GUARANTEED' :
                  state.profile === 'night' ? '★ ILLUMINATED NIGHT CORRIDOR' :
                  state.profile === 'sheltered' ? '☂ RAIN-SHELTERED ROUTE' :
                  '⚡ FASTEST WALKING ROUTE'}
              </span>
              <button data-action="toggle-simulation" class="sim-btn ${state.running ? 'sim-active' : ''}">
                ${state.running ? 'Ⅱ Pause Walk' : '▶ Walk Route'}
              </button>
            </div>

            <div class="metrics-row">
              <div class="primary-time">
                <span class="time-num">${estMins}</span>
                <span class="time-unit">min</span>
              </div>
              <div class="secondary-metrics">
                <div class="dist-stat"><b>${state.routeResult.distance} m</b> (${(state.routeResult.distance * 0.000621371).toFixed(2)} miles)</div>
                <div class="extra-stat">
                  <span>👣 ~${estStepCount} steps</span>
                  <span>🔥 ~${estCals} kcal</span>
                </div>
              </div>
            </div>

            <div class="route-context-box">
              ${state.profile === 'accessible' ? 'Route passes exclusively through grade-level portals, 1:16 ramps, and automatic doors. Zero staircases.' :
                state.profile === 'night' ? 'Route follows active lantern-lit pathways passing 3 Blue-Light emergency phones.' :
                state.profile === 'sheltered' ? 'Route maximizes covered walkways and breezeways between quad buildings.' :
                'Direct path across the central lawn and Founders Quad.'}
            </div>
          </div>

          <!-- Turn-by-Turn Directions -->
          <div class="directions-section">
            <div class="directions-header">
              <p class="section-label">TURN-BY-TURN GUIDANCE</p>
              <span class="step-count">${state.routeResult.instructions.length} steps</span>
            </div>
            <div class="directions-list">
              ${renderTurnDirections()}
            </div>
          </div>
        </aside>

        <!-- Centerpiece Map Stage -->
        <section class="map-stage" aria-label="Interactive Campus Map">
          <!-- Floating Map Metadata & Pill -->
          <div class="map-header-pill">
            <span class="map-mode-indicator">
              ${state.theme === 'blueprint' ? 'ARCHITECTURAL CAD VIEW · DRAWING 04' :
                state.theme === 'night' ? 'NIGHT SAFETY CORRIDORS ACTIVE' :
                'VERDANT STATE CENTRAL CAMPUS'}
            </span>
            <span class="compass-rose" title="Map orientation: North is up">N ↑</span>
          </div>

          <!-- Theme Palette Selector -->
          <div class="theme-toolbar" role="group" aria-label="Map style">
            <button class="theme-pick-btn ${state.theme === 'day' ? 'selected' : ''}" data-theme="day" title="Campus Day">
              ☀ <span>Day</span>
            </button>
            <button class="theme-pick-btn ${state.theme === 'night' ? 'selected' : ''}" data-theme="night" title="Twilight / Night Walk">
              ☾ <span>Night</span>
            </button>
            <button class="theme-pick-btn ${state.theme === 'blueprint' ? 'selected' : ''}" data-theme="blueprint" title="CAD Blueprint">
              ⌗ <span>Blueprint</span>
            </button>
          </div>

          <!-- Floating Zoom & Reset Navigation Controls -->
          <div class="map-nav-tools">
            <button class="tool-btn" data-action="zoom-in" title="Zoom in">+</button>
            <button class="tool-btn" data-action="zoom-out" title="Zoom out">−</button>
            <hr class="tool-divider">
            <button class="tool-btn" data-action="reset-view" title="Reset camera view">⟲</button>
          </div>

          <!-- Mobile Route Planner Trigger -->
          <button class="mobile-open-planner" data-action="show-panel">
            ↗ Route Planner (${estMins}m)
          </button>

          <!-- Core Interactive SVG Vector Map -->
          ${renderSVGMap()}

          <!-- Cartographic Legend -->
          <div class="map-legend-box">
            <div class="legend-item"><span class="legend-swatch swatch-route"></span>Active Route</div>
            <div class="legend-item"><span class="legend-swatch swatch-bldg"></span>Building Footprint</div>
            <div class="legend-item"><span class="legend-swatch swatch-walkway"></span>Paved Walkway</div>
            <div class="legend-item"><span class="legend-swatch swatch-road"></span>Access Road</div>
          </div>

          <!-- Quick Rescue Amenity Bar -->
          <div class="quick-rescue-bar">
            <span class="rescue-caption">FIND NEAREST:</span>
            <button class="rescue-btn" data-near="restroom" title="Navigate to closest accessible washroom">
              <span class="rescue-icon">◉</span> Washrooms
            </button>
            <button class="rescue-btn" data-near="water" title="Navigate to closest hydration station">
              <span class="rescue-icon">◌</span> Water Refill
            </button>
            <button class="rescue-btn" data-near="cafe" title="Navigate to closest dining/coffee">
              <span class="rescue-icon">✦</span> Food & Coffee
            </button>
            <button class="rescue-btn" data-near="health" title="Navigate to Health & Urgent Care">
              <span class="rescue-icon">✚</span> Health Center
            </button>
            <button class="rescue-btn" data-near="lab" title="Navigate to Turing Hall Computing Lab">
              <span class="rescue-icon">⌘</span> Computer Lab
            </button>
          </div>
        </section>
      </div>

      <!-- Building Details Modal/Drawer -->
      ${state.selected ? renderBuildingDrawer(getPlaceById(state.selected)) : ''}

      <!-- Searchable Location Directory Modal -->
      ${state.showDirectory ? renderDirectoryModal() : ''}

      <!-- Dynamic Feedback Toast Notification -->
      <div id="toast" class="toast-notice" role="status"></div>
    </main>
  `;

  bindInteractions();
}

// Generate Turn-by-Turn Instruction HTML
function renderTurnDirections() {
  const steps = state.routeResult.instructions;
  if (!steps || steps.length === 0) return '<p class="empty-steps">Select origin and destination to preview turns.</p>';

  return steps.map((s, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === steps.length - 1;
    const progressIndex = Math.floor(state.simProgress * steps.length);
    const isCurrentSimStep = state.running && progressIndex === idx;

    return `
      <div class="direction-step ${isCurrentSimStep ? 'step-active' : ''}">
        <span class="step-num ${isLast ? 'step-final' : ''}">${isLast ? '◎' : idx + 1}</span>
        <div class="step-text">
          <p class="step-main">
            <b>${s.text}</b>
          </p>
          <span class="step-meta">${s.dist} meters · ~${Math.max(1, Math.round(s.dist / 78))} min walk</span>
        </div>
      </div>
    `;
  }).join('');
}

// Generate Vector SVG Cartography
function renderSVGMap() {
  const footprints = {
    admin: 'M210 305 h100 v75 h-100 z',
    library: 'M335 185 h130 v90 h-130 z',
    clock: 'M495 220 h48 v48 h-48 z',
    turing: 'M505 350 h118 v78 h-118 z',
    civic: 'M670 275 h110 v82 h-110 z',
    biosphere: 'M775 155 h115 v90 h-115 z',
    union: 'M485 530 h135 v85 h-135 z',
    studio: 'M285 485 h105 v85 h-105 z',
    health: 'M710 515 h105 v80 h-105 z',
    harbor: 'M890 440 h118 v110 h-118 z',
    athletics: 'M845 625 h165 v85 h-165 z'
  };

  const trees = [
    [160, 270], [192, 245], [130, 315], [290, 190], [465, 145],
    [620, 200], [865, 130], [930, 250], [1025, 430], [220, 620],
    [410, 685], [685, 690], [770, 730], [1090, 670], [1040, 560],
    [680, 260], [420, 410], [530, 480], [620, 600], [760, 390]
  ];

  const points = getRoutePointsString();

  return `
    <div class="map-viewport" id="map-viewport" tabindex="0" aria-label="Interactive SVG Campus Map (Use mouse drag to pan, wheel to zoom)">
      <svg class="campus-svg" id="campus-svg" viewBox="0 0 1200 800" role="img">
        <defs>
          <pattern id="cad-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0 H0 V24" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.14" />
          </pattern>
          <filter id="building-elevation" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="2" dy="6" stdDeviation="5" flood-color="#142e27" flood-opacity="0.22" />
          </filter>
          <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g id="camera-transform-group" transform="translate(${state.tx} ${state.ty}) scale(${state.zoom})">
          <!-- Canvas Background -->
          <rect class="svg-map-base" width="1200" height="800" />
          <rect class="svg-cad-overlay" width="1200" height="800" fill="url(#cad-grid)" />

          <!-- Natural Landscape Polygons -->
          <path class="svg-water" d="M1000 100 c70 28 97 96 58 147 s-92 14-105-25 6-94 47-122 z" />
          <path class="svg-park park-alpha" d="M110 115 c108-70 205-35 213 25 s-60 110-162 75 -92-65-51-100 z" />
          <path class="svg-park park-beta" d="M70 600 c70-80 150-76 194-23 s-10 132-117 124 -125-53-77-101 z" />
          <path class="svg-park park-gamma" d="M810 315 c150-48 250 37 222 120 s-137 86-197 38 -89-119-25-158 z" />

          <!-- Vehicular Perimeter and Service Roads -->
          <path class="svg-road" d="M108 415 H1070 M514 90 V720 M320 110 C424 185 483 210 510 300 M570 305 c170 50 300 69 450 25 M310 430 c73 35 137 67 200 90 M540 530 c130-20 248-5 370 25" />

          <!-- Pedestrian Walkway Network -->
          <path class="svg-walkway" d="
            M250 385 L405 300 520 305 580 430 555 610 370 575 320 430
            M520 305 L710 380 815 270
            M580 430 L760 430 750 600 915 540 900 665
            M555 525 L690 520 845 525 915 540
            M405 300 L455 345 510 430
            M510 430 L550 525
            M710 380 L760 430
            M370 575 L555 610
          " />

          <!-- Tree Canopy Scatter -->
          <g class="svg-trees">
            ${trees.map(([x, y]) => `
              <g transform="translate(${x} ${y})">
                <circle class="tree-base" r="14" />
                <circle class="tree-top" r="9" cy="-6" />
              </g>
            `).join('')}
          </g>

          <!-- Amenity Markers (when enabled) -->
          ${state.showAmenities ? renderAmenityOverlays() : ''}

          <!-- Computed Active Route Polyline -->
          ${points ? `
            <polyline class="route-underlay" points="${points}" />
            <polyline class="route-stroke" points="${points}" filter="url(#route-glow)" />
          ` : ''}

          <!-- Route Simulation Beacon -->
          ${state.running ? renderSimulationBeacon() : ''}

          <!-- Building Vector Polygons & Labels -->
          <g class="svg-buildings">
            ${PLACES.map(p => {
              const isSelected = p.id === state.selected;
              const isStart = p.node === state.start;
              const isEnd = p.node === state.end;

              return `
                <g class="bldg-group ${isSelected ? 'bldg-selected' : ''} ${isStart ? 'bldg-start' : ''} ${isEnd ? 'bldg-end' : ''}"
                   data-building-id="${p.id}"
                   role="button"
                   tabindex="0"
                   aria-label="${p.name} (${p.category})">
                  <path class="bldg-footprint" d="${footprints[p.id]}" filter="url(#building-elevation)" />
                  <text class="bldg-symbol" x="${p.x}" y="${p.y - 7}" text-anchor="middle">${p.icon}</text>
                  <text class="bldg-title" x="${p.x}" y="${p.y + 14}" text-anchor="middle">${p.name.split(' ').slice(0, 2).join(' ')}</text>
                  <text class="bldg-code" x="${p.x}" y="${p.y + 26}" text-anchor="middle">${p.code}</text>

                  ${isStart ? `<circle class="endpoint-beacon start-beacon" cx="${p.x}" cy="${p.y - 32}" r="7" /><text class="endpoint-text" x="${p.x}" y="${p.y - 29}" text-anchor="middle">A</text>` : ''}
                  ${isEnd ? `<circle class="endpoint-beacon end-beacon" cx="${p.x}" cy="${p.y - 32}" r="7" /><text class="endpoint-text" x="${p.x}" y="${p.y - 29}" text-anchor="middle">B</text>` : ''}
                </g>
              `;
            }).join('')}
          </g>

          <!-- Geographic Quad Titles on Map -->
          <g class="svg-quad-labels">
            <text x="520" y="175">FOUNDERS’ HISTORIC QUAD</text>
            <text x="130" y="745">WEST RESIDENTIAL LAWNS</text>
            <text x="945" y="750">VARSITY RECREATION DISTRICT</text>
            <text x="830" y="145">BIOLOGICAL SCIENCE PARK</text>
          </g>
        </g>
      </svg>
    </div>
  `;
}

function renderAmenityOverlays() {
  const pins = [
    { x: 380, y: 265, icon: '☕', label: 'Night Owl Café' },
    { x: 575, y: 590, icon: '◉', label: 'All-Gender Washrooms' },
    { x: 520, y: 395, icon: '♿', label: 'Turing Hall East ADA Ramp' },
    { x: 745, y: 575, icon: '✚', label: 'Oasis Urgent Care' },
    { x: 345, y: 360, icon: '◌', label: 'Hydration Station' },
    { x: 525, y: 220, icon: '📞', label: 'Emergency Call Box 01' },
    { x: 910, y: 560, icon: '🚴', label: 'Campus Bike Share Hub' },
    { x: 565, y: 545, icon: '🏧', label: 'Credit Union ATM' }
  ];

  return `
    <g class="amenity-overlay-layer">
      ${pins.map(p => `
        <g class="amenity-pin" transform="translate(${p.x} ${p.y})" title="${p.label}">
          <circle r="12" class="amenity-circle" />
          <text class="amenity-icon" y="1" text-anchor="middle" dominant-baseline="middle">${p.icon}</text>
        </g>
      `).join('')}
    </g>
  `;
}

function renderSimulationBeacon() {
  const path = state.routeResult.path;
  if (!path || path.length < 2) return '';

  const totalSegments = path.length - 1;
  const rawIdx = state.simProgress * totalSegments;
  const segIdx = Math.min(totalSegments - 1, Math.floor(rawIdx));
  const frac = rawIdx - segIdx;

  const nodeA = NODES[path[segIdx]];
  const nodeB = NODES[path[segIdx + 1]] || nodeA;

  const curX = nodeA[0] + (nodeB[0] - nodeA[0]) * frac;
  const curY = nodeA[1] + (nodeB[1] - nodeA[1]) * frac;

  return `
    <g class="simulation-beacon" transform="translate(${curX} ${curY})">
      <circle class="sim-pulse" r="22" />
      <circle class="sim-core" r="9" />
      <text class="sim-arrow" text-anchor="middle" dominant-baseline="middle">●</text>
    </g>
  `;
}

// Building Detailed Dossier Drawer
function renderBuildingDrawer(bldg) {
  if (!bldg) return '';

  const floors = bldg.floors || [];
  const activeFloor = floors[state.activeFloorIdx] || floors[0];

  return `
    <div class="drawer-backdrop" data-action="close-drawer"></div>
    <aside class="detail-drawer" role="dialog" aria-modal="true" aria-label="${bldg.name} details">
      <button class="drawer-dismiss-btn" data-action="close-drawer" aria-label="Close details">×</button>

      <div class="drawer-hero category-${bldg.category}">
        <span class="drawer-badge">${bldg.code} · ${bldg.badge}</span>
        <div class="hero-glyph">${bldg.icon}</div>
        <p class="drawer-cat-label">${bldg.category.toUpperCase()} COMPLEX</p>
        <h2 class="drawer-title">${bldg.name}</h2>
      </div>

      <div class="drawer-content">
        <p class="drawer-desc">${bldg.description}</p>

        <!-- Live Operations Box -->
        <div class="status-box">
          <div class="status-left">
            <span class="live-status-dot ${bldg.isOpen ? 'dot-open' : 'dot-closed'}"></span>
            <div>
              <b>${bldg.isOpen ? 'Open Today' : 'Closed'}</b>
              <small>${bldg.hours} · ${bldg.busyLevel}</small>
            </div>
          </div>
          <button class="route-to-here-btn" data-action="set-as-destination" data-node="${bldg.node}">
            ↗ Route Here
          </button>
        </div>

        <!-- Multi-Floor Room Directory -->
        <div class="drawer-section">
          <h3 class="section-title">Interior Floor Directory (${floors.length} Levels)</h3>
          <div class="floor-tabs">
            ${floors.map((fl, idx) => `
              <button class="floor-tab ${idx === state.activeFloorIdx ? 'floor-active' : ''}" data-action="select-floor" data-idx="${idx}">
                ${fl.level.split('·')[0].trim()}
              </button>
            `).join('')}
          </div>
          <div class="room-directory-panel">
            <p class="floor-subtitle">${activeFloor ? activeFloor.level : 'Level Details'}</p>
            <ul class="room-list">
              ${activeFloor ? activeFloor.rooms.map(rm => `<li><span class="room-bullet">›</span> ${rm}</li>`).join('') : '<li>No rooms cataloged</li>'}
            </ul>
          </div>
        </div>

        <!-- Available Facilities & Amenities -->
        <div class="drawer-section">
          <h3 class="section-title">Key Facilities & Services</h3>
          <div class="tag-cloud">
            ${bldg.amenities.map(a => `<span class="facility-chip">✓ ${a}</span>`).join('')}
          </div>
        </div>

        <!-- Accessibility Specifications -->
        <div class="drawer-section access-section">
          <h3 class="section-title">Accessibility & Universal Design</h3>
          <div class="tag-cloud">
            ${bldg.accessibility.map(acc => `<span class="access-chip">♿ ${acc}</span>`).join('')}
          </div>
        </div>
      </div>
    </aside>
  `;
}

// Searchable Campus Directory Modal
function renderDirectoryModal() {
  const matches = getFilteredPlaces();

  const categories = [
    ['all', 'All Locations'],
    ['academic', 'Academic Halls'],
    ['lab', 'Laboratories'],
    ['library', 'Libraries'],
    ['dining', 'Food & Dining'],
    ['hostel', 'Residence Halls'],
    ['health', 'Health & Clinic'],
    ['arts', 'Arts Studios'],
    ['sports', 'Athletics & Gym'],
    ['admin', 'Administrative']
  ];

  return `
    <div class="modal-backdrop" data-action="close-directory"></div>
    <div class="directory-modal" role="dialog" aria-modal="true" aria-label="Campus Location Directory">
      <div class="directory-modal-head">
        <div>
          <p class="eyebrow">CAMPUS DIRECTORY & SEARCH</p>
          <h2 class="directory-title">Find Buildings, Rooms & Labs</h2>
        </div>
        <button class="modal-close-btn" data-action="close-directory" aria-label="Close directory">×</button>
      </div>

      <div class="directory-search-input-wrap">
        <span class="search-glass-icon">⌕</span>
        <input id="directory-search-input"
               type="text"
               placeholder="Search by building name, room (e.g. Room 302), café, or department…"
               value="${state.search}"
               autofocus />
        ${state.search ? `<button class="search-clear-btn" data-action="clear-search">×</button>` : ''}
      </div>

      <div class="directory-category-filters">
        ${categories.map(([catKey, label]) => `
          <button class="filter-pill ${state.filterCategory === catKey ? 'pill-active' : ''}" data-action="filter-category" data-cat="${catKey}">
            ${label}
          </button>
        `).join('')}
      </div>

      <div class="directory-results-container">
        <p class="results-tally">Showing ${matches.length} location${matches.length === 1 ? '' : 's'}</p>
        <div class="results-grid">
          ${matches.length > 0 ? matches.map(p => `
            <div class="result-card" data-action="open-detail" data-id="${p.id}">
              <div class="result-card-top">
                <span class="result-glyph category-${p.category}">${p.icon}</span>
                <div class="result-meta">
                  <span class="result-code">${p.code} · ${p.badge}</span>
                  <h4 class="result-name">${p.name}</h4>
                  <p class="result-hours">${p.hours}</p>
                </div>
              </div>
              <p class="result-desc">${p.description}</p>
              <div class="result-amenities">
                ${p.amenities.slice(0, 3).map(am => `<span class="result-chip">${am}</span>`).join('')}
              </div>
              <div class="result-actions">
                <button class="card-btn-inspect" data-action="open-detail" data-id="${p.id}">Inspect Details</button>
                <button class="card-btn-route" data-action="route-to" data-node="${p.node}">Directions Here ↗</button>
              </div>
            </div>
          `).join('') : `
            <div class="directory-empty-state">
              <span class="empty-icon">⌕</span>
              <h3>No matching locations found</h3>
              <p>Try searching for building names (e.g. "Turing", "Library"), room codes (e.g. "302"), or amenities (e.g. "Coffee", "ATM", "Washroom").</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// Bind DOM Events and Interactions
function bindInteractions() {
  // Select Dropdowns
  document.querySelector('#start-node-select')?.addEventListener('change', e => {
    state.start = e.target.value;
    state.running = false;
    render();
  });

  document.querySelector('#end-node-select')?.addEventListener('change', e => {
    state.end = e.target.value;
    state.running = false;
    render();
  });

  // Profile Card Switches
  document.querySelectorAll('[data-profile]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.profile = btn.dataset.profile;
      state.running = false;
      render();
      const profileNames = { walk: 'Fastest walking', accessible: 'Certified step-free', sheltered: 'Rain-sheltered', night: 'Well-lit safety' };
      showToast(`${profileNames[state.profile]} route recalculated.`);
    });
  });

  // Theme Switches
  document.querySelectorAll('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = btn.dataset.theme;
      render();
      showToast(`Map mode switched to ${btn.dataset.theme.toUpperCase()}.`);
    });
  });

  // Building Click on Map
  document.querySelectorAll('[data-building-id]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      state.selected = el.dataset.buildingId;
      state.activeFloorIdx = 0;
      render();
    });
  });

  // Directory Search Input
  const searchInput = document.querySelector('#directory-search-input');
  if (searchInput) {
    searchInput.focus();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    searchInput.addEventListener('input', e => {
      state.search = e.target.value;
      render();
    });
  }

  // Action Buttons
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const action = btn.dataset.action;
      handleAction(action, btn.dataset);
    });
  });

  // Quick Rescue Amenity Buttons
  document.querySelectorAll('[data-near]').forEach(btn => {
    btn.addEventListener('click', () => {
      handleNearest(btn.dataset.near);
    });
  });

  // Pan and Zoom gesture handlers
  setupMapPanAndZoom();
}

function handleAction(act, data) {
  if (act === 'directory') {
    state.showDirectory = !state.showDirectory;
    render();
  } else if (act === 'close-directory') {
    state.showDirectory = false;
    state.search = '';
    render();
  } else if (act === 'clear-search') {
    state.search = '';
    render();
  } else if (act === 'filter-category') {
    state.filterCategory = data.cat;
    render();
  } else if (act === 'open-detail') {
    state.selected = data.id;
    state.activeFloorIdx = 0;
    state.showDirectory = false;
    render();
  } else if (act === 'close-drawer') {
    state.selected = null;
    render();
  } else if (act === 'select-floor') {
    state.activeFloorIdx = parseInt(data.idx, 10) || 0;
    render();
  } else if (act === 'amenities') {
    state.showAmenities = !state.showAmenities;
    showToast(state.showAmenities ? 'Amenity map pins shown.' : 'Amenity pins hidden.');
    render();
  } else if (act === 'swap-nodes') {
    const temp = state.start;
    state.start = state.end;
    state.end = temp;
    state.running = false;
    render();
    showToast('Origin and destination reversed.');
  } else if (act === 'reset-location') {
    state.start = 'clock';
    state.running = false;
    render();
    showToast('Starting point locked to Aster Clocktower.');
  } else if (act === 'set-as-destination') {
    state.end = data.node;
    state.selected = null;
    state.running = false;
    render();
    showToast(`Destination set to ${getPlaceByNode(data.node)?.name}.`);
  } else if (act === 'route-to') {
    state.end = data.node;
    state.showDirectory = false;
    state.running = false;
    render();
    showToast(`Navigating to ${getPlaceByNode(data.node)?.name}.`);
  } else if (act === 'toggle-simulation') {
    state.running = !state.running;
    if (state.running) {
      state.simProgress = 0;
      runSimulationAnimation();
    }
    render();
  } else if (act === 'zoom-in') {
    state.zoom = Math.min(2.5, state.zoom + 0.25);
    render();
  } else if (act === 'zoom-out') {
    state.zoom = Math.max(0.75, state.zoom - 0.25);
    render();
  } else if (act === 'reset-view') {
    state.zoom = 1;
    state.tx = 0;
    state.ty = 0;
    render();
    showToast('Camera reset to full campus overview.');
  } else if (act === 'show-panel') {
    document.querySelector('#nav-panel')?.classList.add('panel-mobile-open');
  } else if (act === 'hide-panel') {
    document.querySelector('#nav-panel')?.classList.remove('panel-mobile-open');
  }
}

function handleNearest(type) {
  const map = {
    restroom: 'union',    // Great Oaks Food Hall has all-gender & accessible restrooms
    water: 'library',      // Nightingale Library hydration station
    cafe: 'library',       // Night Owl Café
    health: 'health',      // Oasis Campus Health
    lab: 'turing'          // Alan Turing Hall Computing Lab
  };

  const targetNode = map[type] || 'clock';
  state.end = targetNode;
  state.running = false;
  const targetPlace = getPlaceByNode(targetNode);
  render();
  showToast(`Directing to nearest ${type}: ${targetPlace?.name}`);
}

function showToast(msg) {
  setTimeout(() => {
    const toast = document.querySelector('#toast');
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('toast-active');
      setTimeout(() => {
        toast.classList.remove('toast-active');
      }, 2400);
    }
  }, 30);
}

// Route Simulation Animation Loop
let simAnimationId = null;
function runSimulationAnimation() {
  const startTime = performance.now();
  const stepCount = state.routeResult.path.length;
  const totalDuration = Math.max(4500, stepCount * 1200);

  function frame(currentTime) {
    if (!state.running) return;

    const elapsed = currentTime - startTime;
    state.simProgress = Math.min(1, elapsed / totalDuration);
    render();

    if (state.simProgress < 1) {
      simAnimationId = requestAnimationFrame(frame);
    } else {
      state.running = false;
      render();
      showToast('You have arrived at your destination!');
    }
  }

  simAnimationId = requestAnimationFrame(frame);
}

// Pan and Zoom Drag Engine
function setupMapPanAndZoom() {
  const viewport = document.querySelector('#map-viewport');
  if (!viewport) return;

  let isDragging = false;
  let dragOrigin = { x: 0, y: 0, tx: 0, ty: 0 };

  viewport.addEventListener('wheel', e => {
    e.preventDefault();
    const zoomDelta = e.deltaY < 0 ? 0.12 : -0.12;
    state.zoom = Math.max(0.7, Math.min(2.8, state.zoom + zoomDelta));
    const group = document.querySelector('#camera-transform-group');
    if (group) {
      group.setAttribute('transform', `translate(${state.tx} ${state.ty}) scale(${state.zoom})`);
    }
  }, { passive: false });

  viewport.addEventListener('pointerdown', e => {
    if (e.target.closest('[data-building-id]')) return;
    isDragging = true;
    dragOrigin = { x: e.clientX, y: e.clientY, tx: state.tx, ty: state.ty };
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', e => {
    if (!isDragging) return;
    const dx = e.clientX - dragOrigin.x;
    const dy = e.clientY - dragOrigin.y;
    state.tx = dragOrigin.tx + dx;
    state.ty = dragOrigin.ty + dy;
    const group = document.querySelector('#camera-transform-group');
    if (group) {
      group.setAttribute('transform', `translate(${state.tx} ${state.ty}) scale(${state.zoom})`);
    }
  });

  const stopDrag = () => { isDragging = false; };
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
}

// Global Keyboard Shortcuts
window.addEventListener('keydown', e => {
  if (e.key === '/' && !state.showDirectory && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    state.showDirectory = true;
    render();
  } else if (e.key === 'Escape') {
    if (state.showDirectory) {
      state.showDirectory = false;
      render();
    } else if (state.selected) {
      state.selected = null;
      render();
    }
  }
});

// Initial Mount
render();
