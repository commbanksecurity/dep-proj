// Front-end demo session only. Replace with a real auth provider + backend before launch
// (two factor login, KYC provider, Australian hosted database – see business plan section 6).
export type DemoUser = { name: string; email: string };

const KEY = "gtc-demo-user";

export function saveDemoUser(u: DemoUser) {
  localStorage.setItem(KEY, JSON.stringify(u));
}

export function loadDemoUser(): DemoUser | null {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "null");
  } catch {
    return null;
  }
}

export function clearDemoUser() {
  localStorage.removeItem(KEY);
}
