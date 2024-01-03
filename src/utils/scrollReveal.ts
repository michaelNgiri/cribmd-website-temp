/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createIntersectionObserver } from '.';
import { createMutationObserver } from './observer';

export class ScrollReveal {
  private root?: HTMLElement;
  private animAnchors: NodeListOf<HTMLElement> | undefined;
  private intersectionObserver?: IntersectionObserver;
  private mutationObserver?: MutationObserver;

  constructor(root: HTMLElement, options?: { once: boolean }) {
    const { innerWidth: width } = globalThis;
    let mutationTimeout: NodeJS.Timeout;

    this.root = root;
    this.intersectionObserver = createIntersectionObserver(
      null,
      (entries) => {
        entries.forEach((entry) => {
          const animAnchor = entry.target as HTMLElement;
          const isIntersecting = entry.isIntersecting;

          if (animAnchor.dataset.animate_targets !== '' + isIntersecting) {
            animAnchor.dataset.animate_targets = isIntersecting ? 'true' : 'false';
          }

          if (animAnchor.dataset.anim_once || options?.once) {
            if (isIntersecting) {
              delete animAnchor.dataset.anim_anchor;
              this.intersectionObserver?.unobserve(animAnchor);
            }
          }
        });
      },
      { threshold: width < 768 ? 0.4 : 0.5 }
    );

    if (options?.once) {
      this.root.dataset.anim_once = 'true';
    }

    // this block is used to throttle ScrollReveal registration till all children nodes of root have mounted in the DOM
    this.mutationObserver = createMutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(() => {
        this.register();
      }, 200);
    });
    this.mutationObserver.observe(this.root, { subtree: true, childList: true });
  }

  register() {
    this.animAnchors = this.root?.querySelectorAll(':scope [data-anim_anchor]');
    this.animAnchors?.forEach((animAnchor) => {
      if (
        ((animAnchor.parentNode as HTMLElement).dataset.seen === 'true' ||
          (animAnchor.parentNode?.parentNode as HTMLElement).dataset.seen === 'true') &&
        this.root?.dataset.anim_once === 'true'
      ) {
        // this.mutationObserver?.disconnect();
        return;
      }

      this.intersectionObserver?.observe(animAnchor);
    });
  }

  unregister() {
    this.animAnchors?.forEach((animAnchor) => this.intersectionObserver?.unobserve(animAnchor));
    this.mutationObserver?.disconnect();
  }
}
