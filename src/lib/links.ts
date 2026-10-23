/** Genera un enlace de WhatsApp cuando el teléfono está en formato internacional y sin símbolos. */
export function getWhatsAppHref(
  phone: string,
  message: string,
): string | null {
  if (!/^[1-9]\d{7,14}$/.test(phone) || !message.trim()) return null;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function getSocialProfileHref(
  value: string,
  allowedHosts: readonly string[],
  profilePath: RegExp,
): string | null {
  if (!value.trim()) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      allowedHosts.includes(url.hostname) &&
      profilePath.test(url.pathname)
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
  return getSocialProfileHref(
    value,
    ["linkedin.com", "www.linkedin.com"],
    /^\/in\/[^/]+\/?$/,
  );
}

/** Acepta únicamente perfiles HTTPS de GitHub con una ruta de usuario. */
export function getGitHubHref(value: string): string | null {
  return getSocialProfileHref(
    value,
    ["github.com", "www.github.com"],
    /^\/[A-Za-z0-9-]+\/?$/,
  );
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
