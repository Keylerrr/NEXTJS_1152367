"use client"
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-24 h-24 border border-[#AE6A50] border-4 flex items-center justify-center text-[#DC9750] text-5xl font-bold hover:bg-[#e3c29d] transition"
    >
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else if (isDraw) {
    status = "¡Empate! 🤝";
  } else {
    status = "Siguiente turno: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="mb-4 text-3xl text-[#922C40] italic font-semibold">{status}</div>
      <div className="bg-[#F9D8B2] grid grid-cols-3">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}

function ResultModal({ winner, isDraw, onAccept }) {
  if (!winner && !isDraw) return null;

  const title = winner ? `GANADOR:` : "¡EMPATE!";
  const message = winner ? `${winner} ganó la partida.` : "No hay más movimientos disponibles.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#F3EAC0] p-8 rounded-2xl shadow-2xl text-center transform transition-transform duration-200">
        <h2 className="text-3xl font-extrabold text-[#922C40] mb-2">{title}</h2>
        <p className="text-[#6b2d33] mb-6">{message}</p>
        <div className="text-6xl mb-6">{winner ? "🏆" : "🤝"}</div>
        <button
          onClick={onAccept}
          className="px-6 py-2 bg-[#AE6A50] text-[#F3EAC0] rounded-lg font-semibold shadow hover:brightness-95 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const winner = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every(Boolean);

  const moves = history.map((squares, move) => {
    let description = move > 0 ? "Ir al movimiento #" + move : "Ir al inicio del juego";
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="text-[#922C40] hover:underline"
        >
          {description}
        </button>
      </li>
    );
  });

  return ( 
    <div className="bg-[#F3EAC0] min-h-screen flex flex-col">
      <header>
        <h1 className="bg-[#AE6A50] p-4 text-3xl text-[#F3EAC0] font-bold italic text-center">
          TIC-TAC-TOE
        </h1>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
              </div>
            </div>

            <aside className="w-full md:w-64">
              <div className="bg-[#F9D8B2] border-2 border-[#AE6A50] rounded-lg p-4 shadow">
                <h3 className="text-xl font-bold text-[#922C40] mb-3">Movimientos</h3>
                <ol className="space-y-2">{moves}</ol>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ResultModal winner={winner} isDraw={isDraw} onAccept={resetGame} />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
