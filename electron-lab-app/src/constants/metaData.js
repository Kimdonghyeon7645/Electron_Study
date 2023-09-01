const currentDate = new Date().toISOString();

export const META_DATA_CHECKSUM =
  "bde825b78c2498c8c6b8a2d04b24347b4465164d2a196214b2ba1a7eaa7f6f7c";
// `김동현` 을 원천으로 사용한 SHA-256 체크섬

export const META_DATA = {
  name: "Sequential Circuit Design Software",
  version: "1.0.0+1",
  author: "Kim Donghyeon",
  description: "A software for designing sequential circuits",
  tags: ["circuit", "design", "sequential"],
  creationDate: currentDate,
  lastModified: currentDate,
  fileType: "seq",
  license: "Proprietary",
  checksum: META_DATA_CHECKSUM,
};
