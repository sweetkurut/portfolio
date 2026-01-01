import { memo } from "react";

import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNestjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiDjango,
    SiSpring,
    SiDocker,
    SiGit,
    SiFlutter,
    SiFigma,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const logos: LogoItem[] = [
    { node: <SiReact />, title: "React" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiNestjs />, title: "NestJS" },
    { node: <SiPostgresql />, title: "PostgreSQL" },
    { node: <SiPython />, title: "Python" },
    { node: <SiDjango />, title: "Django" },
    { node: <SiSpring />, title: "Spring" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiGit />, title: "Git" },
    { node: <SiFlutter />, title: "Flutter" },
    { node: <SiFigma />, title: "Figma" },
];

const Technologies = memo(() => {
    return (
        <LogoLoop
            logos={logos}
            speed={90}
            gap={48}
            logoHeight={42}
            fadeOut
            scaleOnHover
            ariaLabel="Technologies we use"
        />
    );
});

export default Technologies;
