﻿using Microsoft.EntityFrameworkCore;
using System;

namespace PixelBattles.Server.DataStorage.Models
{
    public class UserActionEntity
    {
        public Guid GameId { get; set; }

        public Guid UserId { get; set; }

        public int ChangeIndex { get; set; }

        public int YIndex { get; set; }

        public int XIndex { get; set; }

        public uint Color { get; set; }
    }

    class UserActionEntityBuilder : IBuildable
    {
        public void Build(ModelBuilder builder)
        {
            builder.Entity<UserActionEntity>(action =>
            {
                action.ToTable("UserAction");
                action.HasKey(t => new { t.GameId, t.ChangeIndex });
            });
        }
    }
}