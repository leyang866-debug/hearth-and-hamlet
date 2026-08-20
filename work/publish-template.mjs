import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const { createGitHubClient } = await import(pathToFileURL('C:/Users/Administrator/.claude/site-deploy/github-client.mjs').href);
const token = readFileSync('C:/Users/Administrator/.claude/credentials/github-token.txt', 'utf8').trim();
const repository = 'leyang866-debug/anvil-template-v3';
const sourceDirectory = 'D:/code/anvilwiki-template-fixed';
const github = createGitHubClient(token);
await github.createRepository('anvil-template-v3');
execFileSync('git', ['init', '-b', 'main'], { cwd: sourceDirectory, stdio: 'inherit' });
execFileSync('git', ['remote', 'add', 'origin', `https://github.com/${repository}.git`], { cwd: sourceDirectory, stdio: 'inherit' });
execFileSync('git', ['add', '-A'], { cwd: sourceDirectory, stdio: 'inherit' });
execFileSync('git', ['commit', '-m', 'Create repaired AnvilWiki v3 template'], { cwd: sourceDirectory, stdio: 'inherit' });
execFileSync('git', ['push', '-u', 'origin', 'main'], { cwd: sourceDirectory, stdio: 'inherit' });
console.log(`PUBLISHED ${repository}`);
