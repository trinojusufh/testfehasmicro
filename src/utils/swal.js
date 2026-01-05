import Swal from 'sweetalert2'

const baseSwal = Swal.mixin({
  background: '#FFFFFF',
  color: '#0F172A',
  customClass: {
    popup: 'rounded-xl shadow-lg',
    title: 'text-slate-900 font-semibold',
    htmlContainer: 'text-slate-600',

    confirmButton:
      'bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium',

    cancelButton:
      'bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-lg font-medium',

    denyButton:
      'bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium'
  },
  buttonsStyling: false
})

/* ===== ALERT TYPES ===== */

export const successAlert = (title, text = '') => {
  return baseSwal.fire({
    icon: 'success',
    title,
    text,
    timer: 1500,
    showConfirmButton: false
  })
}

export const errorAlert = (title, text = '') => {
  return baseSwal.fire({
    icon: 'error',
    title,
    text
  })
}

export const confirmDelete = () => {
  return baseSwal.fire({
    icon: 'warning',
    title: 'Delete Product?',
    text: 'This action cannot be undone',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    confirmButtonColor: '#DC2626'
  })
}
