/**
 * Stub for Universal Editor (ue/scripts/ue.js) when carousel block is not present.
 * Export showSlide so UE can switch slides on selection. No-op if carousel block is not used.
 * @param {Element} block - Carousel block element
 * @param {string|number} index - Slide index to show
 */
export function showSlide(block, index) {
  if (!block || index == null) return;
  const slides = block.querySelectorAll?.('li.carousel-slide, [data-slide-index]');
  const i = typeof index === 'string' ? parseInt(index, 10) : index;
  if (slides && slides[i]) {
    slides[i].scrollIntoView?.({ behavior: 'smooth', block: 'nearest' });
  }
}
