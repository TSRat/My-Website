# Delacroix Archive data and analytics decision

No analytics provider is connected. The archive sends no page, search, filter,
source, note or identity event to a server and sets no cookie. A provider-neutral
adapter currently returns sanitized event objects locally and delivers nothing.

Allowed event names are:

- `archive_route_opened` with the route key;
- `timeline_event_toggled` with the public event ID;
- `viewing_task_completed` with the public work ID and task mode.

No event includes raw search text, journal text, or a visitor’s research note.

The browser stores only:

- selected language;
- selected life, timeline and journal periods;
- IDs of saved works;
- free-form notes keyed to a work ID.

These values remain in `localStorage` on the current browser. There is no
account, sync, export or recovery service. If later analytics is requested,
connect the existing adapter to an approved provider only after a privacy
review; raw search text and note content remain prohibited.
