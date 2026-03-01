import React, { useState, useRef, useEffect } from "react";
import { WindowHeader } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Terminal = () => {
  const INITIAL_TEXT = [
    { type: "output", value: "Welcome to TarunOS Terminal", variant: "info" },
    { type: "output", value: "Type 'help' to see available commands.", variant: "info" }
  ];

  const [history, setHistory] = useState(INITIAL_TEXT);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const { windows, openWindow, closeWindow } = useWindowStore();

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getColor = (variant) => {
    switch (variant) {
      case "error":
        return "text-[#ff7b72]";
      case "success":
        return "text-[#3fb950]";
      case "info":
        return "text-[#58a6ff]";
      default:
        return "text-[#c9d1d9]";
    }
  };

  const commands = {
    help: () => ({
      value: `Available commands:
            1. help
            2. whoami
            3. date
            4. ls
            5. status
            6. open [window]
            7. close [window]
            8. clear`,
      variant: "info"
    }),

    whoami: () => ({
      value: `Tarun Bhati
M.Tech CSE @ NIT Trichy
Focus: Algorithms, Systems, ML`,
      variant: "default"
    }),

    date: () => ({
      value: new Date().toString(),
      variant: "default"
    }),

    ls: () => ({
      value: Object.keys(windows).join(", "),
      variant: "default"
    }),

    status: () => {
      const open = Object.entries(windows)
        .filter(([_, val]) => val.isOpen)
        .map(([name]) => `• ${name}`)
        .join("\n");

      return {
        value: open || "No windows open",
        variant: "default"
      };
    },

    clear: () => ({ value: "CLEAR" }),

    open: (app) => {
      if (!app) {
        return { value: "Usage: open [window]", variant: "error" };
      }
      if (!windows[app]) {
        return { value: `No such window: ${app}`, variant: "error" };
      }

      openWindow(app);
      return { value: `Opening ${app}...`, variant: "success" };
    },

    close: (app) => {
      if (!app) {
        return { value: "Usage: close [window]", variant: "error" };
      }
      if (!windows[app]) {
        return { value: `No such window: ${app}`, variant: "error" };
      }

      closeWindow(app);
      return { value: `Closing ${app}...`, variant: "success" };
    }
  };

  const handleCommand = (cmd) => {
    if (!cmd.trim()) return;

    const parts = cmd.trim().split(" ");
    const base = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    let result;

    if (commands[base]) {
      result = commands[base](arg);

      if (result.value === "CLEAR") {
        setHistory(INITIAL_TEXT);
        return;
      }
    } else {
      result = {
        value: `command not found: ${cmd}`,
        variant: "error"
      };
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", value: cmd },
      { type: "output", value: result.value, variant: result.variant }
    ]);

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }

    if (e.key === "ArrowUp") {
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex + 1 < commandHistory.length
          ? historyIndex + 1
          : historyIndex;

      setHistoryIndex(newIndex);
      setInput(
        commandHistory[commandHistory.length - 1 - newIndex]
      );
    }

    if (e.key === "ArrowDown") {
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setInput(
        commandHistory[commandHistory.length - 1 - newIndex]
      );
    }
  };

  return (
    <>
      <WindowHeader id="terminal">
        <h2>Terminal</h2>
      </WindowHeader>

      <div className="bg-[#0f1117] p-4 h-80 font-mono text-sm overflow-auto border-t border-[#30363d]">

        {history.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap ${getColor(line.variant)}`}
          >
            {line.type === "input" && (
              <>
                <span className="text-[#58a6ff] font-semibold">
                  tarun@portfolio
                </span>
                <span className="text-[#8b949e]">:~$ </span>
              </>
            )}
            {line.value}
          </div>
        ))}

        {/* Input */}
        <div className="flex">
          <span className="text-[#58a6ff] font-semibold">
            tarun@portfolio
          </span>
          <span className="text-[#8b949e]">:~$ </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-[#c9d1d9] caret-[#58a6ff] w-full"
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </>
  );
};

export default WindowWrapper(Terminal, "terminal");