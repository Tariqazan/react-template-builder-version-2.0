import ButtonElement from "./components/button/ButtonElement";
import CarouselElement from "./components/carousel/CarouselElement";
import ColumnElement from "./components/columns/ColumnElement";
import DividerElement from "./components/divider/DividerElement";
import HeadingElement from "./components/heading/HeadingElement";
import HTMLElement from "./components/html/HTMLElement";
import ImageElement from "./components/image/ImageElement";
import MenuElement from "./components/menu/MenuElement";
import SocialElement from "./components/social/SocialElement";
import TextElement from "./components/text/TextElement";
import TimerElement from "./components/timer/TimerElement";
import VideoElement from "./components/video/VideoElement";

export const Elements = [
    {
        'id': 1,
        'text': 'Columns',
        item: <ColumnElement />
    },
    {
        'id': 2,
        'text': 'Button',
        item: <ButtonElement />
    },
    {
        'id': 3,
        'text': 'Carousel',
        item: <CarouselElement />
    }, {
        'id': 4,
        'text': 'Divider',
        item: <DividerElement />
    },
    {
        'id': 5,
        'text': 'Heading',
        item: <HeadingElement />
    },
    {
        'id': 6,
        'text': 'HTML',
        item: <HTMLElement />
    }, {
        'id': 7,
        'text': 'Image',
        item: <ImageElement />
    },
    {
        'id': 8,
        'text': 'Menu',
        item: <MenuElement />
    },
    {
        'id': 9,
        'text': 'Social',
        item: <SocialElement />
    }, {
        'id': 10,
        'text': 'Text',
        item: <TextElement />
    },
    {
        'id': 11,
        'text': 'Timer',
        item: <TimerElement />
    },
    {
        'id': 12,
        'text': 'Video',
        item: <VideoElement />
    },
]