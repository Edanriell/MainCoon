import { gsap } from "gsap";

interface ITabs {
	timeLine: gsap.core.Timeline;
	triggersContainer: HTMLElement | null;
	allTabs: NodeListOf<Element> | null;
	dataAttributeName: string;
	activeTabClass: string;
	tabsEasingFunction: string;
	tabsTriggerActiveClass: string;
	initialActiveTabDataAttribute: string;
	init(): void;
}

export default class Tabs implements ITabs {
	timeLine = gsap.timeline({ duration: 0.35 });

	triggersContainer: HTMLElement | null;

	allTabs: NodeListOf<Element> | null;

	dataAttributeName: string;

	activeTabClass: string;

	tabsEasingFunction: string;

	tabsTriggerActiveClass: string;

	initialActiveTabDataAttribute: string;

	constructor({
		container,
		tabs,
		dataAttribute,
		activeClass,
		easingFunction,
		triggerActiveClass,
		initialActiveTab
	}: {
		container: string;
		tabs: string;
		dataAttribute?: string;
		activeClass?: string;
		easingFunction?: string;
		triggerActiveClass?: string;
		initialActiveTab: string;
	}) {
		this.triggersContainer = document.querySelector(container);
		this.allTabs = document.querySelectorAll(tabs);
		this.dataAttributeName = dataAttribute || "data-target";
		this.activeTabClass = activeClass || "ActiveTab";
		this.tabsEasingFunction = easingFunction || "power4.out";
		this.tabsTriggerActiveClass = triggerActiveClass || "PetTabs-ActiveButton";
		this.initialActiveTabDataAttribute = initialActiveTab;
	}

	public init(): void {
		this.createEventListener(this.triggersContainer);
		this.#toggleTabDisplay(this.allTabs, this.initialActiveTabDataAttribute);
		this.#toggleTriggerActiveClass(this.triggersContainer, this.initialActiveTabDataAttribute);
	}

	private createEventListener(element: HTMLElement | null): void {
		element?.addEventListener("click", event => {
			const button = event.target as HTMLElement;
			if (button !== null && button.hasAttribute(this.dataAttributeName)) {
				this.switchTab(button);
			}
		});
	}

	private switchTab(button: HTMLElement): void {
		const targetAttribute = button.getAttribute(this.dataAttributeName);

		this.#toggleTabDisplay(this.allTabs, targetAttribute);
		this.#toggleTriggerActiveClass(this.triggersContainer, targetAttribute);
	}

	#toggleTabDisplay(elements: NodeListOf<Element> | null, targetTab: string | null = null): void {
		this.#hideInactiveTabs(elements);
		this.#showActiveTab(elements, targetTab);
	}

	#showActiveTab(tabs: NodeListOf<Element> | null, target: string | null): void {
		tabs?.forEach(tab => {
			if (target && tab.getAttribute(this.dataAttributeName) === `${target}`) {
				tab.classList.add(this.activeTabClass);
				this.timeLine.fromTo(
					tab,
					{ scale: 0.9, opacity: 0, display: "none", duration: 0.65 },
					{
						scale: 1,
						opacity: 1,
						duration: 0.65,
						display: "block",
						ease: this.tabsEasingFunction
					}
				);
			}
		});
	}

	#hideInactiveTabs(tabs: NodeListOf<Element> | null): void {
		tabs?.forEach(tab => {
			if (tab.classList.contains(this.activeTabClass)) {
				tab.classList.remove(this.activeTabClass);
				this.timeLine.fromTo(
					tab,
					{ scale: 1, opacity: 1, display: "block", duration: 0.65 },
					{
						scale: 0.9,
						opacity: 0,
						duration: 0.65,
						display: "none",
						ease: this.tabsEasingFunction
					}
				);
			} else {
				(tab as HTMLElement).style.cssText = `
		        display: none;
		    `;
			}
		});
	}

	#toggleTriggerActiveClass(triggers: HTMLElement | null, targetTrigger: string | null): void {
		const allTriggers = triggers?.children;
		this.#removeActiveClass([...(allTriggers as unknown as HTMLElement[])]);
		this.#addActiveClass(allTriggers, targetTrigger);
	}

	#removeActiveClass(triggers: HTMLElement[]): void {
		for (const trigger of triggers) {
			if (trigger.classList.contains(this.tabsTriggerActiveClass)) {
				trigger.classList.remove(this.tabsTriggerActiveClass);
			}
		}
	}

	#addActiveClass(triggers: HTMLCollection | undefined, target: string | null): void {
		for (const trigger of [...(triggers as unknown as HTMLElement[])]) {
			let button: HTMLButtonElement | HTMLElement | null;
			if (trigger.querySelector("button")) {
				button = trigger.querySelector("button");
			} else {
				button = trigger;
			}
			if (button?.getAttribute(this.dataAttributeName) === target) {
				trigger.classList.add(this.tabsTriggerActiveClass);
			}
		}
	}
}
