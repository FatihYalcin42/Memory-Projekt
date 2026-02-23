/**
 * Replaces `{{TOKEN}}` placeholders in a raw template string.
 *
 * @param template Raw template source.
 * @param tokens Key-value map for placeholders.
 * @returns Template with all placeholders replaced.
 */
export function applyTemplateTokens(
  template: string,
  tokens: Record<string, string>,
): string {
  let resolvedTemplate = template;
  Object.entries(tokens).forEach(([token, value]) => {
    resolvedTemplate = resolvedTemplate.replaceAll(`{{${token}}}`, value);
  });
  return resolvedTemplate;
}
