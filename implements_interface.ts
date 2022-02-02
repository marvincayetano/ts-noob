interface Runnable {
  run(): void;
}

class Job implements Runnable {
  run() {
    console.log("running the scheduled job!");
  }
}

// Class 'Task' incorrectly implements interface 'Runnable'.
// Property 'run' is missing in type 'Task' but required in type 'Runnable'.(2420)
class Task implements Runnable {
  perform() {
    console.log("pong!");
  }
}
