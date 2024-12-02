import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({ habit, onToggle, onDelete }) {
    return (
      <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="checkbox"
          // TODO: toggle the habit's completed state when the checkbox is clicked
          checked={habit.completed}
          onChange={() => onToggle(habit.id)}
          style={{ marginRight: "8px" }}
        />
        <span
          style={{
            textDecoration: habit.completed ? "line-through" : "none",
            flex: 1,
            cursor: "pointer",
          }}
        >
          {habit.name}
        </span>
        <button
          // TODO: delete the habit when the button is clicked
          onClick={() => onDelete(habit.id)}
        >
          Delete
        </button>
      </li>
    );
  }
