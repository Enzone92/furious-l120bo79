import { html } from '@microsoft/fast-element';
import { provideDesignSystem, getButton, getTooltip } from '@divriots/starter-furious';

provideDesignSystem().register(getButton(), getTooltip());

export const defaultStory = () => html`
  <div>
    <fs-button id="anchor" style="height: 40px; width: 100px; margin: 100px; background: green;"> Hover me </fs-button>
    <fs-tooltip anchor="anchor">Tooltip text</fs-tooltip>
  </div>
`;
defaultStory.storyName = 'Default';
