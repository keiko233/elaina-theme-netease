export function getImageData(inputId: string, callback: (result: string) => void) {
  const fileInput = document.getElementById(inputId) as HTMLInputElement;
  const file = fileInput.files?.[0];

  if (!file || !/^image\/\w+/.test(file.type)) {
    alert("请确保文件为图像文件");
    return false;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    const result = reader.result as string;
    callback(result);
  };
}