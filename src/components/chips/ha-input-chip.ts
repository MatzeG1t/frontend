import { MdInputChip } from "@material/web/chips/input-chip";
import { css } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-input-chip")
export class HaInputChip extends MdInputChip {
  static override styles = [
    ...super.styles,
    css`
      :host {
        --md-sys-color-primary: var(--primary-text-color);
        --md-sys-color-on-surface: var(--primary-text-color);
        --md-input-chip-container-shape: 16px;
        --md-input-chip-outline-color: var(--outline-color);
        --md-input-chip-selected-container-color: rgba(
          var(--rgb-primary-text-color),
          0.15
        );
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-input-chip": HaInputChip;
  }
}
