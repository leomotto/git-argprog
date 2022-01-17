console.log('hola, el script está funcionando ok')

function update(online) {
    document.getElementById('status').textContent =
      online ? 'Online' : 'Offline';
}
