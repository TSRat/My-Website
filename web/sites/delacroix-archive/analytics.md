# Delacroix Archive data and analytics decision

No analytics provider is connected. The archive sends no page, search, filter,
source, note or identity event to a server and sets no cookie.

The browser stores only:

- selected language;
- selected life, timeline and journal periods;
- IDs of saved works;
- free-form notes keyed to a work ID.

These values remain in `localStorage` on the current browser. There is no
account, sync, export or recovery service. If later analytics is requested,
define provider-neutral event names first and never include raw search text or
note content.
