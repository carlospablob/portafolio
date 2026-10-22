/** Genera un enlace de WhatsApp cuando el teléfono está en formato internacional y sin símbolos. */
export function getWhatsAppHref(
  phone: string,
  message: string,
): string | null {
  if (!/^[1-9]\d{7,14}$/.test(phone) || !message.trim()) return null;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Restringe el enlace profesional a un perfil HTTPS de LinkedIn. */
export function getLinkedInHref(value: string): string | null {
  if (!value.trim()) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      ["linkedin.com", "www.linkedin.com"].includes(url.hostname) &&
      /^\/in\/[^/]+\/?$/.test(url.pathname)
    ) {
      return url.href;
    }
  } catch {
    return null;
  }

  return null;
}

/** Descarta destinos externos vacíos, inseguros o mal formados. */
export function getExternalProjectHref(value?: string): string | null {
  if (!value?.trim()) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}
