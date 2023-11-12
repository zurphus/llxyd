import beatsImage from '../images/beats.jpg';
import microphoneImage from '../images/microphone.jpg';
import remasterImage from '../images/remaster.jpg';
import speakerImage from '../images/speaker.jpg';

const allImages = [
    {
        id: 1,
        title: 'PRICING',
        link: 'pricing',
        alt: 'beats image',
        imageUrl: beatsImage
    },
    {
        id: 2,
        title: 'WORK',
        link: 'work',
        alt: 'remaster image',
        imageUrl: remasterImage
    },
    {
        id: 3,
        title: 'COLLAB',
        link: 'collab',
        alt: 'speaker image',
        imageUrl: speakerImage
    },
    {
        id: 4,
        title: 'EDUCATION',
        link: 'education',
        alt: 'microphone image',
        imageUrl: microphoneImage
    }
]

export default allImages;