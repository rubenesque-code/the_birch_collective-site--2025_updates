type ImgProps = {
	src: string;
	w: number;
};
type ImgPropsH = ImgProps & { h: number };

export type Picture = { img: ImgPropsH; sources: { [key: string]: string } };
