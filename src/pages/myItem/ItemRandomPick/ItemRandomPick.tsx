import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  Engine,
  World,
  Render,
  Bodies,
  Runner,
  Events,
  MouseConstraint,
  Mouse,
} from 'matter-js';

const ItemRandomPickComponent = styled.div`
  padding: 55px;
`;

const PikingBox = styled.div`
  position: relative;
  width: 250px;
  height: 550px;
  margininline: auto;
`;

const Screen = styled.div`
  position: absolute;
  width: 250px;
  height: 100px;
  background-color: black;
  top: 320px;
`;

const ItemRandomPick = () => {
  const canvasRefBox = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const engine = Engine.create();
    engine.gravity.y = 0.7;
    const render = Render.create({
      engine,
      canvas: canvasRefBox.current!,
      options: {
        width: 250,
        height: 550,
        background: '',
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(125, 400, 250, 5, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const top = Bodies.rectangle(125, 0, 250, 10, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const right = Bodies.rectangle(250, 200, 10, 400, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const left = Bodies.rectangle(0, 200, 10, 400, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const ball = Bodies.circle(125, 365, 30, {
      isStatic: true,
      render: {
        fillStyle: 'black',
      },
    });

    const ball2 = Bodies.circle(79, 200, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball3 = Bodies.circle(180, 140, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball4 = Bodies.circle(10, 170, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball5 = Bodies.circle(210, 60, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball6 = Bodies.circle(180, 120, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball7 = Bodies.circle(240, 100, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball8 = Bodies.circle(200, 40, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball9 = Bodies.circle(40, 40, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const ball10 = Bodies.circle(100, 120, 30, {
      render: {
        fillStyle: 'black',
      },
      restitution: 0.8,
    });

    const pickFloor = Bodies.rectangle(125, 550, 70, 10, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const pickRight = Bodies.rectangle(160, 475, 5, 150, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const pickLeft = Bodies.rectangle(90, 475, 5, 150, {
      isStatic: true,
      collisionFilter: {
        group: -1,
      },
      render: {
        fillStyle: 'black',
      },
    });

    const ball11 = Bodies.circle(125, 435, 30, {
      render: {
        fillStyle: 'black',
      },
    });

    World.add(engine.world, [
      floor,
      top,
      right,
      left,
      ball,
      ball2,
      ball3,
      ball4,
      ball5,
      ball6,
      ball7,
      ball8,
      ball9,
      ball10,
      pickFloor,
      pickRight,
      pickLeft,
    ]);
    Render.run(render);

    const runner = Runner.run(engine);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
    });

    Events.on(mouseConstraint, 'mousedown', function (event) {
      if (mouseConstraint.body) {
        World.remove(engine.world, [ball]);
        World.add(engine.world, [ball11]);
      }
    });

    return () => {
      Runner.stop(runner);
      Render.stop(render);
    };
  }, []);

  return (
    <ItemRandomPickComponent>
      <PikingBox>
        <canvas ref={canvasRefBox} />
        <Screen />
      </PikingBox>
    </ItemRandomPickComponent>
  );
};

export default ItemRandomPick;
