"use client";
import { useEffect, useRef } from "react";

// ripped from https://codepen.io/adamlindqvist/pen/EaPeJg
export function Snow() {
    const snowRef = useRef(null);

    useEffect(() => {

        const requestAnimFrame = window.requestAnimationFrame
            || (window as any).webkitRequestAnimationFrame
            || (window as any).mozRequestAnimationFrame
            || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };

        const COUNT = 300;
        const ref = snowRef.current as unknown as HTMLDivElement;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = ref.clientWidth;
        let height = ref.clientHeight;

        let i = 0;
        let active = false;

        function onResize() {
            width = ref.clientWidth;
            height = ref.clientHeight;
            canvas.width = width;
            canvas.height = height;
            if (ctx) {
                ctx.fillStyle = "#FFFFFF";
            }

            var wasActive = active;
            active = width > 600;

            if (!wasActive && active) {
                requestAnimFrame(update);
            }
        }

        class Snowflake {
            private x: number;
            private y: number;
            private vy: number;
            private vx: number;
            private r: number;
            private o: number;

            constructor() {
                this.x = 0;
                this.y = 0;
                this.vy = 0;
                this.vx = 0;
                this.r = 0;
                this.o = 0;
            }

            public reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * -height;
                this.vy = 1 + Math.random() * 3;
                this.vx = 0.5 - Math.random();
                this.r = 1 + Math.random() * 2;
                this.o = 0.5 + Math.random() * 0.5;
            }
        }

        canvas.style.position = "absolute";
        canvas.style.left = canvas.style.top = "0";

        var snowflakes: Array<any> = [], snowflake;
        for (i = 0; i < COUNT; i++) {
            snowflake = new Snowflake();
            snowflake.reset();
            snowflakes.push(snowflake);
        }

        function update() {
            ctx?.clearRect(0, 0, width, height);

            if (!active) {
                return;
            }

            for (i = 0; i < COUNT; i++) {
                snowflake = snowflakes[i];
                snowflake.y += snowflake.vy;
                snowflake.x += snowflake.vx;

                if (ctx) {
                    ctx.globalAlpha = snowflake.o;
                    ctx.beginPath();
                    ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
                    ctx.closePath();
                    ctx.fill();
                }

                if (snowflake.y > height) {
                    snowflake.reset();
                }
            }

            requestAnimFrame(update);
        }

        onResize();
        window.addEventListener("resize", onResize, false);
        ref.appendChild(canvas);
    }, []);

    return (
        <div className="w-full h-full absolute" ref={snowRef}></div>
    );
}