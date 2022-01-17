console.log('hola, todo está funcionando ok')

function update(online) {
    document.getElementById('status').textContent =
      online ? 'Online' : 'Offline';
}
