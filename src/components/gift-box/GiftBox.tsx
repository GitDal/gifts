"use client";
import { ReactNode, useEffect, useState } from "react";

type Props = {
    children?: ReactNode;
    boxColor: string;
    wrapperColor: string;
};


export function GiftBox({ children, boxColor, wrapperColor }: Props) {
    const [handleOpen, setHandleOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(true);

    useEffect(() => {
        if (handleOpen) {
            setHover(() => false);
            setTimeout(() => setOpen(() => true), 250);
        }
    }, [handleOpen]);

    return (
        <div className={`relative flex flex-col justify-center items-center ${open ? "" : "cursor-pointer"}`}
            onClick={() => setHandleOpen(() => true)}
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
        >
            <Lid boxColor={boxColor} wrapperColor={wrapperColor} hover={hover} open={open} />
            <Box boxColor={boxColor} wrapperColor={wrapperColor} open={open} />
            <div className={`absolute transition-all ease-in-out duration-500
                            ${open ? "scale-100" : "scale-0"}`}>
                {children}
            </div>
        </div>
    );
}

type BoxProps = {
    open?: boolean;
    boxColor: string;
    wrapperColor: string;
};

function Box({ open, boxColor, wrapperColor }: BoxProps) {
    return (
        <div className={
            `relative w-60 h-52 flex justify-center shadow-2xl
            transition-all ease-in-out duration-500
            ${open ? "translate-y-[1000px]" : ""}`}
            style={{ backgroundColor: boxColor }}
        >
            <div className="w-6 h-full" style={{ backgroundColor: wrapperColor }}>
            </div>
            <div className="w-full h-6 absolute self-center" style={{ backgroundColor: wrapperColor }}>
            </div>
        </div>
    );
}

type LidProps = {
    hover?: boolean;
    open?: boolean;
    boxColor: string;
    wrapperColor: string;
};

function Lid({ hover, open, boxColor, wrapperColor }: LidProps) {
    return (
        <div className={`-mb-8 z-10 flex flex-col-reverse
                        transition-all ease-in-out duration-500
                        ${open ? "-translate-y-[1000px]" : ""}
                        ${(!open && hover) ? "animate-wiggle-medium" : ""}`}>
            <div
                className="z-20 w-64 h-10 flex justify-center"
                style={{ boxShadow: "black 0px 10px 25px -10px", backgroundColor: boxColor }}
            >
                <div className="w-6 h-full" style={{ backgroundColor: wrapperColor }}>
                </div>
            </div>
            <Ribbon wrapperColor={wrapperColor} />
        </div >
    );
}

type RibbonProps = {
    wrapperColor: string;
};

function Ribbon({ wrapperColor }: RibbonProps) {
    return (
        <div className="flex items-center justify-center">
            <div
                className="skew-x-[20deg] -translate-x-3 -translate-y-1"
                style={{ borderRadius: "20px", boxShadow: `${wrapperColor} 0px 0px 0px 15px` }}>
                <div className="w-10 h-10"></div>
            </div>
            <div
                className="-skew-x-[20deg] translate-x-3 -translate-y-1"
                style={{ borderRadius: "20px", boxShadow: `${wrapperColor} 0px 0px 0px 15px` }}>
                <div className="w-10 h-10"></div>
            </div>
        </div>
    );
}