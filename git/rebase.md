# rebase变基

## 合并多次提交纪录

```bash
git rebase -i HEAD~4
```

## 合并分支

```bash
git rebase master
```

优点：合并 commit 记录，保持分支整洁；相比 merge 来说会减少分支合并的记录(不含merge)；
缺点：修改了提交的历史记录，易造成多开发人员合作时的冲突发生
