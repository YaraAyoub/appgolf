// Path Physics.js
import Matter from "matter-js";

const Physics = (entities, { touches, time }) => {
  let engine = entities["physics"].engine;
  let ball = entities["1"].body;
  let hole = entities["2"].body;

  Matter.Engine.update(engine, time.delta);

  touches.filter(t => t.type === "press").forEach(t => {
    Matter.Body.applyForce(ball, { x: ball.position.x, y: ball.position.y }, { x: 0.01 * (t.event.pageX - ball.position.x), y: 0.01 * (t.event.pageY - ball.position.y) });
  });

  let distance = Matter.Vector.magnitude(Matter.Vector.sub(ball.position, hole.position));
  if (distance < ball.circleRadius + hole.circleRadius) {
    entities["4"].victoire = true;
  }

  return entities;
}

export { Physics };