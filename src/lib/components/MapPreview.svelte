<script lang="ts">
  import { onMount } from 'svelte';

  let mapContainer: HTMLDivElement | null = null;
  let mapMessage = 'Map preview area';

  onMount(() => {
    if (!mapContainer || typeof window === 'undefined') return;

    let map: import('maplibre-gl').Map | undefined;

    void (async () => {
      try {
        const maplibregl = await import('maplibre-gl');

        map = new maplibregl.Map({
          container: mapContainer as HTMLDivElement,
          style: {
            version: 8,
            sources: {
              osm: {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '&copy; OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: 'osm',
                type: 'raster',
                source: 'osm'
              }
            ]
          },
          center: [-87.6298, 41.8781],
          zoom: 8
        });

        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        new maplibregl.Marker({ color: '#4f46e5' })
          .setLngLat([-87.6298, 41.8781])
          .setPopup(
            new maplibregl.Popup({ offset: 20 }).setHTML(
              '<strong>Chicago</strong><br />Research, forecasting, AI systems, and applied ML'
            )
          )
          .addTo(map);

        mapMessage = 'MapLibre preview loaded';
      } catch (error) {
        console.error('Map preview failed:', error);
        mapMessage = 'Map preview unavailable until maplibre-gl is installed.';
      }
    })();

    return () => {
      map?.remove();
    };
  });
</script>

<div class="map-card">
  <div bind:this={mapContainer} class="map-frame" aria-label="Map preview"></div>
  <div class="map-caption">
    <strong>MapLibre-style preview</strong>
    <span>{mapMessage}</span>
    <small>
      This can later be replaced with your actual SoReMo map, a forecasting visual, or another
      research demo.
    </small>
  </div>
</div>
