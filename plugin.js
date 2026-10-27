
// pelis&series — esqueleto inicial para Kino.
// No se ha identificado todavía una API pública de ENMCINE ni una URL de vídeo.
// No inventar direcciones de reproducción: completar estas funciones tras verificar
// las respuestas reales de la fuente y que su uso esté autorizado.

export async function search(query) {
  const q = String(query && query.q || "").trim();
  if (!q) return [];

  // Pendiente: implementar búsqueda cuando se identifique el endpoint público real.
  return [];
}

export async function resolve(ref) {
  // Pendiente: resolver una referencia real de ENMCINE a un MP4/HLS compatible.
  // Este error explícito evita fingir que el plugin ya reproduce contenido.
  throw kino.error("not_found", "ENMCINE todavía no está integrado: falta identificar una URL de reproducción compatible.");
}
