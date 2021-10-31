import ChoosePicture from "../pages/ChoosePicture";
import Camera from "../pages/Camera";
import Result from "../pages/Result";

export const steps = [
    {
        name: 'main',
        component: ChoosePicture
    },
    {
        name: 'main',
        component: Camera
    },
    {
        name: 'result',
        component: Result
    }
]