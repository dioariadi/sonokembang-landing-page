export default function Icon({ name, size = 16 }) {
  const s = size;
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "pin":     return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>;
    case "ig":      return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg>;
    case "wa":      return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 20.5 12Z"/><path d="M8.6 8.8c.2-.4.5-.5.8-.5h.6c.2 0 .4.1.6.5l.7 1.6c.1.3 0 .5-.1.7l-.5.6c-.1.2-.2.4 0 .7.4.8 1.2 1.6 2 2.1.3.2.5.1.7-.1l.5-.6c.2-.2.4-.2.7-.1l1.5.7c.4.2.5.4.5.6v.6c0 .5-.4 1.1-.9 1.3-1.4.5-3.1-.1-4.6-1.6-1.5-1.5-2.1-3.2-1.6-4.6.1-.3.5-.5.9-.7Z"/></svg>;
    case "tiktok":  return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.3 2.3 2 4 4.5 4.2"/></svg>;
    case "arrow":   return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
    case "left":    return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M15 18l-6-6 6-6"/></svg>;
    case "right":   return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M9 6l6 6-6 6"/></svg>;
    case "plus":    return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M12 5v14M5 12h14"/></svg>;
    case "close":   return <svg width={s} height={s} viewBox="0 0 24 24" {...stroke}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    default: return null;
  }
}
