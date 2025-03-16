export function getAge(dateString: string): number {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function putAge(): void {
  const age = getAge("2000/12/12");
  const textEl = document.getElementById("text");

  if (textEl) {
    textEl.innerHTML = `Hello, I am a ${age} years old Student from Münster, Germany. Currently I am studying Business Informatics.`;
  }
}
