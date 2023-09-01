import { META_DATA } from "constants/metaData";

export function saveFile(data, fileName = "새 시퀀스 회로 프로젝트", type = "text/plain") {
  const blob = new Blob([...JSON.stringify({ metaData: META_DATA, ...data })], { type });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName + ".seq";

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
}
