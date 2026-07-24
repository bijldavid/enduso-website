const SELECTION_BACKGROUND_COLORS = [
	'var(--pastel-green)',
	'var(--pastel-orange)',
	'var(--pastel-purple)',
	'var(--pastel-blue)'
]

const SELECTION_TEXT_COLORS = [
	'var(--green)',
	'var(--orange)',
	'var(--purple)',
	'var(--blue)'
]

const SELECTOR_EVENT_NAMESPACE = '__endusoSelectionColorCyclerCleanup__'

export default defineNuxtPlugin(() => {
	if (typeof window === 'undefined' || typeof document === 'undefined') return

	// Prevent duplicate listeners during HMR in dev.
	if (typeof window[SELECTOR_EVENT_NAMESPACE] === 'function') {
		window[SELECTOR_EVENT_NAMESPACE]()
	}

	let currentIndex = 0
	let shouldCycleAfterClear = false

	const setSelectionColor = () => {
		document.documentElement.style.setProperty('--selection-highlight', SELECTION_BACKGROUND_COLORS[currentIndex])
		document.documentElement.style.setProperty('--selection-text-color', SELECTION_TEXT_COLORS[currentIndex])
	}

	const cycleSelectionColor = () => {
		currentIndex = (currentIndex + 1) % SELECTION_BACKGROUND_COLORS.length
		setSelectionColor()
	}

	const hasVisibleSelection = () => {
		const selection = window.getSelection()
		if (!selection || selection.isCollapsed) return false
		return Boolean(selection.toString().trim())
	}

	setSelectionColor()

	const handleSelectionChange = () => {
		if (hasVisibleSelection()) return
		if (!shouldCycleAfterClear) return
		cycleSelectionColor()
		shouldCycleAfterClear = false
	}

	const markSelectionComplete = () => {
		if (!hasVisibleSelection()) return
		shouldCycleAfterClear = true
	}

	const handleMouseUp = () => {
		requestAnimationFrame(markSelectionComplete)
	}

	const handleTouchEnd = () => {
		requestAnimationFrame(markSelectionComplete)
	}

	const handleKeyUp = (event) => {
		const modifiesSelection = event.shiftKey || (event.metaKey && event.key.toLowerCase() === 'a')
		if (!modifiesSelection) return
		requestAnimationFrame(markSelectionComplete)
	}

	document.addEventListener('mouseup', handleMouseUp)
	document.addEventListener('touchend', handleTouchEnd)
	document.addEventListener('keyup', handleKeyUp)
	document.addEventListener('selectionchange', handleSelectionChange)

	window[SELECTOR_EVENT_NAMESPACE] = () => {
		document.removeEventListener('mouseup', handleMouseUp)
		document.removeEventListener('touchend', handleTouchEnd)
		document.removeEventListener('keyup', handleKeyUp)
		document.removeEventListener('selectionchange', handleSelectionChange)
	}
})
