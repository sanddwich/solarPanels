import SubtitleInterface from "./SubtitleInterface";

export default interface CardInterface {
  img: string | null,
  imgMob: string | null,
  title: string | null,
  subtitles: SubtitleInterface[]
}