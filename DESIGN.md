# Design direction

## Product world

Projects Showcase is an ikebana-inspired arrangement: project records become stems in a deliberately open vessel, and the selected study is the bloom that receives attention. The composition keeps the index human and quiet while preserving a read-only catalog handle for agents.

## Visual system

- Palette: plaster `#ece9df`, soft white `#f7f5ef`, ink `#242720`, pine `#566052`, iris `#4f769c`, and bronze `#8d6d4f`.
- Type: the established Geist sans/mono pairing supports a restrained editorial label system.
- Composition: sparse navigation, large quiet hero, open arrangement alcove, selected study panel, archive controls, and MCP tool index.
- Motion: selecting a stem brings the study into focus with a short scroll; native focus outlines remain visible.

## Interaction and boundary

Visitors can select studies, search project data, switch all/featured views, and copy or open the read-only MCP endpoint. Records are sourced from local `data/projects.json`; the page does not claim project execution, SaaS availability, or write access through MCP.

## Responsive behavior

The arrangement and selected study stack into one reading path on mobile. Search, view controls, and the catalog handle remain reachable without horizontal overflow.
