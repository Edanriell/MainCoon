import { gsap } from "gsap";

interface IAccordion {
	parentContainer: HTMLElement | null;
	isAccordionAlwaysOpen: boolean;
	accordionBodyActiveClass: string;
	accordionTriggerActiveClass: string;
	accordionTriggerSelector: string;
	accordionCollapseSelector: string;
	accordionDataAttribute: string;
	accordionEasingFunction: string;
	init(): void;
}

export default class Accordion implements IAccordion {
	parentContainer: HTMLElement | null;

	isAccordionAlwaysOpen: boolean;

	accordionBodyActiveClass: string;

	accordionTriggerActiveClass: string;

	accordionTriggerSelector: string;

	accordionCollapseSelector: string;

	accordionDataAttribute: string;

	accordionEasingFunction: string;

	constructor({
		container,
		alwaysOpen,
		bodyActiveClass,
		triggerActiveClass,
		triggerSelector,
		collapseSelector,
		dataAttribute,
		easingFunction
	}: {
		container: string;
		alwaysOpen: boolean;
		bodyActiveClass?: string;
		triggerActiveClass?: string;
		triggerSelector?: string;
		collapseSelector?: string;
		dataAttribute?: string;
		easingFunction?: string;
	}) {
		this.parentContainer = document.querySelector(container);
		this.isAccordionAlwaysOpen = alwaysOpen;
		this.accordionBodyActiveClass = bodyActiveClass || "Accordion-CollapseActive";
		this.accordionTriggerActiveClass = triggerActiveClass || "Accordion-ItemActive";
		this.accordionTriggerSelector = triggerSelector || "Accordion-ItemTitle";
		this.accordionCollapseSelector = collapseSelector || "Accordion-Collapse";
		this.accordionDataAttribute = dataAttribute || "data-accordion";
		this.accordionEasingFunction = easingFunction || "power2.out";
	}

	public init(): void {
		this.createEventListener(this.parentContainer);
	}

	private createEventListener(container: HTMLElement | null): void {
		container?.addEventListener("click", event => {
			if ((event.target as HTMLElement)?.classList.contains(this.accordionTriggerSelector)) {
				this.#toggleAccordionBody(event.target as HTMLElement);
				this.#toggleAccordionButton(event.target as HTMLElement);
			}
		});
	}

	#toggleAccordionBody(trigger: HTMLElement): void {
		const targetAccordionBody = trigger.getAttribute(this.accordionDataAttribute);
		const accordionBodies: NodeListOf<HTMLElement> | undefined =
			this.parentContainer?.querySelectorAll(`.${this.accordionCollapseSelector}`);
		const [targetBody]: Array<HTMLElement> = Array.from(
			accordionBodies as Iterable<HTMLElement>
		).filter(body => {
			if (body.getAttribute(this.accordionDataAttribute) === targetAccordionBody) {
				return body;
			}
			return null;
		});

		if (!targetBody.classList.contains(this.accordionBodyActiveClass)) {
			if (!this.isAccordionAlwaysOpen) {
				this.#hidePreviousAccordion(accordionBodies);
			}

			this.#showActiveBody(targetBody);
		} else {
			this.#hideInactiveBody(targetBody);
		}
	}

	#showActiveBody(body: HTMLElement): void {
		body.classList.add(this.accordionBodyActiveClass);
		gsap.fromTo(
			body,
			{ maxHeight: "0", display: "block" },
			{ maxHeight: "100rem", duration: 1.4, ease: this.accordionEasingFunction }
		);
	}

	#hideInactiveBody(body: HTMLElement): void {
		gsap.to(body, {
			maxHeight: "0",
			duration: 0.7,
			display: "none",
			ease: this.accordionEasingFunction
		});
		body.classList.remove(this.accordionBodyActiveClass);
	}

	#toggleAccordionButton(trigger: HTMLElement): void {
		if (!trigger.classList.contains(this.accordionTriggerActiveClass)) {
			this.#addActiveClass(trigger);
		} else {
			this.#removeActiveClass(trigger);
		}
	}

	#addActiveClass(button: HTMLElement): void {
		button.classList.add(this.accordionTriggerActiveClass);
	}

	#removeActiveClass(button: HTMLElement): void {
		button.classList.remove(this.accordionTriggerActiveClass);
	}

	#hidePreviousAccordion(accordionBodies: NodeListOf<HTMLElement> | undefined): void {
		const triggers = this.parentContainer?.querySelectorAll(
			`.${this.accordionTriggerSelector}`
		);
		const body = [...(accordionBodies as Iterable<HTMLElement>)].find(accordionBody => {
			return accordionBody.classList.contains(this.accordionBodyActiveClass);
		});
		const button = [...(triggers as Iterable<HTMLElement>)].find(triggerButton => {
			return triggerButton.classList.contains(this.accordionTriggerActiveClass);
		});
		if (body && button) {
			this.#removeActiveClass(button);
			this.#hideInactiveBody(body);
		}
	}
}
