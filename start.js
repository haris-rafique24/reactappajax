const { exec } = require('child_process');
const os = require('os');


// Start the server
const serverProcess = exec('node server.js');

// Open the HTML file in the browser after the server is started
serverProcess.on('exit', () => {
  let openCommand;
  if (os.platform() === 'win32') {
    openCommand = 'start';
  } else if (os.platform() === 'darwin') {
    openCommand = 'op'
  } else {
    openCommand = 'xdg-open'; // Linux
  }

  exec(`${openCommand} /public/index.html`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    }
  });
});
