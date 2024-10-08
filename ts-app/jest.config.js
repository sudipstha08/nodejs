module.exports = {
	preset: "",
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
	},
	testMatch: ["<rootDir>/test/*.test.js"],
	globals: {
		"ts-jest": {
			transformerConfig: {
				transformIgnorePatterns: ["jest-runner"],
			},
		},
	},
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.maestro/"],
	testEnvironment: "",
	// setupFiles: ["<rootDir>/test"],
	// setupFilesAfterEnv: ["<rootDir>/jest-setup-after-env.js"],
};
