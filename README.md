# Campus Navigator — Verdant State University

**Campus Navigator** is a frontend-only, interactive collegiate wayfinding and campus exploration application designed for college students navigating a collegiate campus.

---

## Highlights & Features

### 1. Centerpiece Interactive Vector Map
- **Interactive SVG Vector Cartography**: Built on an interactive `1200 x 800` coordinate plane rendering lawns, quads, water bodies, road grids, tree canopies, and 2.5D building footprints.
- **Fluid Pan & Zoom**: Click-and-drag pointer panning, mouse wheel zoom (0.7x to 2.8x), and zoom in/out/reset controls.
- **3 Visual Cartographic Themes**:
  - **Campus Day**: Parkland greens, clean architectural walkways, warm terracotta and stone building footprints.
  - **Twilight / Night Walk**: Deep midnight emerald/navy palette, glowing safety corridors, lantern highlights, and cyan beacons.
  - **Architectural CAD Blueprint**: Blueprint gridlines, cyan vector strokes, and technical architectural drafting aesthetics.

### 2. Locally Defined Mathematical Pathfinding (Dijkstra)
- Graph of **19 strategic campus nodes** and **31 pedestrian pathways** with distance, accessibility, overhead cover, and lighting attributes.
- **4 Distinct Routing Profiles**:
  1. **⚡ Fastest Walk**: Optimal pedestrian route calculating meters, walking time (at 78 m/min), step estimates, and caloric burn.
  2. **♿ Step-Free / Wheelchair Accessible**: Strictly prunes staircases and steep grades; routes exclusively via ADA ramps and level plazas.
  3. **☂ Sheltered / Rain-Safe**: Weights covered breezeways and architectural arcades for adverse weather.
  4. **★ Well-Lit Night Corridor**: Prioritizes illuminated walkways near campus Blue-Light emergency telephone stations.
- **Turn-by-Turn Guidance**: Step-by-step directions with relative bearings, landmark cues, and distance markers.
- **Live Route Simulator**: Animated beacon that walks the path in real time with radar pulsing and step synchronization.

### 3. Comprehensive Building & Room Directory
- Covers **11 major campus complexes**:
  - *Aster Clocktower & Plaza* (Visitor Center & Security Dispatch)
  - *Nightingale Memorial Library* (5-tier research library, Night Owl Café, Silent Stacks)
  - *Alan Turing Hall of Computing* (CS, Robotics Studio Rm 302, Lecture Hall 0.12)
  - *Civic Forum & Humanities Hall* (Writing Center Rm 104, Amphitheatre, Languages)
  - *Biosphere Integrated Life Sciences* (Greenhouses, Gene Sequencing Core Rm 112)
  - *Juniper Student Union & Dining* (Great Oaks Food Hall, Bookstore, ATMs)
  - *Morrow Fine Arts & Fabrication* (Galleries, 3D Prototyping, Ceramics)
  - *Oasis Campus Health & Wellness* (Urgent Care, Pharmacy, Counseling)
  - *Harbor Quad Residential Halls* (Living quarters, study pavilions, community kitchens)
  - *Varsity Fieldhouse & Recreation* (50m Pool, Basketball arena, Bouldering wall)
  - *Fern Hall Administrative Center* (Registrar, Financial Aid, Student Services)
- **Multi-Floor Room Directory**: Tabbed floor selector with cataloged rooms, labs, and faculty offices.
- **Live Open/Closed Indicators**: Operating hours, busyness estimates, amenity badges, and Universal Design / accessibility specs.

### 4. Search & Quick Rescue Tools
- **Instant Search (`/` Shortcut)**: Real-time search across building names, codes, room numbers (e.g., "Room 302"), departments, and amenities.
- **Category Filter Pills**: Filter by Academic, Laboratories, Libraries, Food & Dining, Residence Halls, Health, Arts, Athletics, or Administration.
- **Quick Rescue Bar**: One-click routing to the nearest:
  - ◉ Accessible Washroom
  - ◌ Filtered Water Refill Station
  - ✦ Food & Coffee
  - ✚ Health & Urgent Care
  - ⌘ Computer & Robotics Lab

---

## Running the Application

### Option 1: Native Node Static Server
```bash
node campus-navigator/server.js
```
Open **`http://localhost:4174`** in your browser.

### Option 2: Directly via any static file server
```bash
npx serve campus-navigator
# or
python3 -m http.server 4174 --directory campus-navigator
```
Open **`http://localhost:4174`** in your browser.
