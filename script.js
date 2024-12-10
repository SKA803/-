document.getElementById('show-notes-btn').addEventListener('click', function() {
    var notes = document.getElementById('notes');
    if (notes.style.display === 'none' || notes.style.display === '') {
        notes.style.display = 'block';
    } else {
        notes.style.display = 'none';
    }
});