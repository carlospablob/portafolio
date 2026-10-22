/** Acepta únicamente enlaces HTTPS de WhatsApp con un número configurado. */
export function getWhatsAppHref(value: string): string | null {
  if (!value.trim()) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      ((url.hostname === "wa.me" && /^\/\d+$/.test(url.pathname)) ||
        (url.hostname === "api.whatsapp.com" &&
          url.pathname === "/send" &&
          /^\d+$/.test(url.searchParams.get("phone") ?? "")))
    ) {
      return url.href;
    }
  } catch {
    return null;
  }

  return null;
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
